import { masterResume } from "@/data/master-resume";

export const runtime = "nodejs";

type DrawLine = {
  text: string;
  x: number;
  y: number;
  size: number;
  font: "regular" | "bold";
};

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 40;

function cleanText(value: string) {
  return value
    .replace(/[–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/•/g, "-")
    .replace(/[^ -~]/g, "");
}

function escapePdf(value: string) {
  return cleanText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function estimateWidth(text: string, size: number) {
  return cleanText(text).length * size * 0.49;
}

function wrapText(text: string, size: number, maxWidth: number) {
  const words = cleanText(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;

    if (estimateWidth(candidate, size) <= maxWidth) {
      current = candidate;
      continue;
    }

    if (current) lines.push(current);
    current = word;
  }

  if (current) lines.push(current);
  return lines;
}

function buildResumePages() {
  const pages: DrawLine[][] = [[]];
  let pageIndex = 0;
  let y = 758;

  const currentPage = () => pages[pageIndex];

  const addLine = (
    text: string,
    size = 8.2,
    font: "regular" | "bold" = "regular",
    x = MARGIN,
    gap = 1.2,
  ) => {
    if (y < 42) {
      pages.push([]);
      pageIndex += 1;
      y = 758;
    }

    currentPage().push({ text: cleanText(text), x, y, size, font });
    y -= size * gap;
  };

  const addCentered = (
    text: string,
    size: number,
    font: "regular" | "bold" = "regular",
    gap = 1.15,
  ) => {
    const width = estimateWidth(text, size);
    addLine(text, size, font, Math.max(MARGIN, (PAGE_WIDTH - width) / 2), gap);
  };

  const addParagraph = (
    text: string,
    size = 8.15,
    font: "regular" | "bold" = "regular",
    indent = 0,
    after = 3,
  ) => {
    const lines = wrapText(text, size, PAGE_WIDTH - MARGIN * 2 - indent);
    for (const line of lines) {
      addLine(line, size, font, MARGIN + indent, 1.16);
    }
    y -= after;
  };

  const addBullet = (text: string, size = 7.9) => {
    const lines = wrapText(text, size, PAGE_WIDTH - MARGIN * 2 - 18);
    lines.forEach((line, index) => {
      addLine(index === 0 ? `- ${line}` : line, size, "regular", MARGIN + (index === 0 ? 4 : 16), 1.12);
    });
    y -= 1;
  };

  const addSection = (title: string) => {
    y -= 2;
    addLine(title.toUpperCase(), 10.2, "bold", MARGIN, 1.18);
    y -= 2;
  };

  addCentered("GANIYU BASIRAT OLANIKE", 16.2, "bold", 1.05);
  addCentered(masterResume.title.toUpperCase(), 10.7, "bold", 1.05);
  addCentered(masterResume.subtitle, 8.5, "bold", 1.05);
  addCentered("Lagos, Nigeria | Remote | +234 803 718 9034 | olanike.basirat30@gmail.com", 8.0);
  addCentered("linkedin.com/in/ganiyu-basirat-308ab9403 | nikkytechies-portfolio.vercel.app | github.com/Nikkypwetti", 7.7);
  y -= 5;

  addSection("Professional Summary");
  addParagraph(masterResume.summary, 8.1, "regular", 0, 2);

  addSection("Core Competencies");
  addParagraph(masterResume.coreCompetencies.join(" | "), 7.9, "regular", 0, 2);

  addSection("Professional Experience");
  masterResume.experience.forEach((item) => {
    addLine(`${item.role} | ${item.company}`, 9.1, "bold", MARGIN, 1.06);
    addLine(`${item.period} | ${item.workType}`, 7.8, "regular", MARGIN, 1.12);
    item.achievements.forEach((achievement) => addBullet(achievement, 7.75));
    y -= 2;
  });

  if (pageIndex === 0) {
    pages.push([]);
    pageIndex = 1;
    y = 758;
  }

  addSection("Selected Project Experience");
  masterResume.selectedProjects.forEach((project) => {
    addLine(`${project.title} | ${project.stack}`, 8.45, "bold", MARGIN, 1.05);
    project.bullets.forEach((bullet) => addBullet(bullet, 7.55));
    y -= 1.5;
  });

  addSection("Technical & Business Systems");
  masterResume.technicalGroups.forEach((group) => {
    addParagraph(
      `${group.category}: ${group.items.join(", ")}`,
      7.35,
      "regular",
      0,
      1,
    );
  });

  addSection("Education & Certifications");
  masterResume.education.forEach((item) => {
    addParagraph(
      `${item.degree} | ${item.school} | ${item.period}`,
      7.65,
      "regular",
      0,
      0,
    );
  });
  addParagraph(
    `Certifications: ${masterResume.certifications.join(" | ")}`,
    7.65,
    "regular",
    0,
    0,
  );

  return pages;
}

function buildPdf() {
  const pages = buildResumePages();
  const objects = new Map<number, string>();

  const catalogId = 1;
  const pagesId = 2;
  const regularFontId = 3;
  const boldFontId = 4;

  objects.set(catalogId, `<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  objects.set(regularFontId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.set(boldFontId, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds: number[] = [];
  let nextId = 5;

  pages.forEach((page) => {
    const pageId = nextId++;
    const contentId = nextId++;
    pageIds.push(pageId);

    const commands = page
      .map((line) => {
        const fontRef = line.font === "bold" ? "F2" : "F1";
        return `BT /${fontRef} ${line.size.toFixed(2)} Tf 1 0 0 1 ${line.x.toFixed(2)} ${line.y.toFixed(2)} Tm (${escapePdf(line.text)}) Tj ET`;
      })
      .join("\n");

    objects.set(
      contentId,
      `<< /Length ${Buffer.byteLength(commands, "ascii")} >>\nstream\n${commands}\nendstream`,
    );

    objects.set(
      pageId,
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
  });

  objects.set(
    pagesId,
    `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] >>`,
  );

  const maxId = Math.max(...objects.keys());
  let pdf = "%PDF-1.4\n%1234\n";
  const offsets: number[] = new Array(maxId + 1).fill(0);

  for (let id = 1; id <= maxId; id += 1) {
    const body = objects.get(id);
    if (!body) continue;
    offsets[id] = Buffer.byteLength(pdf, "ascii");
    pdf += `${id} 0 obj\n${body}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "ascii");
  pdf += `xref\n0 ${maxId + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let id = 1; id <= maxId; id += 1) {
    pdf += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${maxId + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(pdf, "ascii");
}

export async function GET() {
  const pdf = buildPdf();

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Ganiyu_Basirat_Olanike_Master_ATS_Resume.pdf"',
      "Cache-Control": "public, max-age=300",
    },
  });
}
