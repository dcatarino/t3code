import { ExternalLinkIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { ThreadDetailsControl } from "./ThreadDetailsControl";
import {
  THREAD_DETAILS_PANEL_ICON_CLASS,
  THREAD_DETAILS_PANEL_LABEL_CLASS,
} from "./threadDetailsPanelStyles";

const THREAD_DETAILS_LINKS: ReadonlyArray<{ label: string; url: string }> = [
  { label: "T3 Code on GitHub", url: "https://github.com/pingdotgg/t3code" },
];

export function ThreadDetailsLinks() {
  return THREAD_DETAILS_LINKS.map((link) => (
    <ThreadDetailsControl
      key={link.url}
      size="xs"
      variant="ghost"
      part="row"
      render={<a href={link.url} target="_blank" rel="noreferrer noopener" />}
    >
      <ExternalLinkIcon className={THREAD_DETAILS_PANEL_ICON_CLASS} />
      <span className={cn("ml-0.5 truncate", THREAD_DETAILS_PANEL_LABEL_CLASS)}>{link.label}</span>
    </ThreadDetailsControl>
  ));
}
