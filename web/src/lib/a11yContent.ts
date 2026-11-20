/**
 * Accessibility fixes for rich text that comes from the CMS (WCAG 2.1 AA), applied when the page is rendered,
 * so the stored content stays as the editors wrote it:
 * - Headings start at h2 under the page's h1: when the content has no h1/h2, every heading moves up one level
 *   (h3 -> h2, ...). `data-level` keeps the original size in CSS (1.3.1).
 * - Tables pasted from Word get their first row marked as column headers when they have none (1.3.1), and are
 *   wrapped in a keyboard-focusable scroll container so wide tables do not make the page scroll sideways (1.4.10).
 */
export function a11yContent(html: string = ''): string {
	if (!html) {
		return html;
	}

	let out = html;

	if (!/<h[12][\s>]/i.test(out) && /<h[3-6][\s>]/i.test(out)) {
		out = out.replace(/<(\/?)h([3-6])(?=[\s>])/gi, (_m, slash: string, level: string) =>
			slash ? `</h${+level - 1}` : `<h${+level - 1} data-level="${level}"`
		);
	}

	let n = 0;
	out = out.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
		let t = table;

		if (!/<th[\s>]/i.test(t)) {
			t = t.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/i, (row) =>
				row.replace(/<td\b/gi, '<th scope="col"').replace(/<\/td>/gi, '</th>')
			);
		}

		n++;
		return `<div class="table-scroll" role="region" tabindex="0" aria-label="Tablica ${n}">${t}</div>`;
	});

	return out;
}
