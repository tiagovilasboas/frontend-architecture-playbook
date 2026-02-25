# Front-End Architecture Playbook – MCP Server

> **Em construção / Under construction**  
> This MCP integration (server, tools, and resources) is under active development. APIs and behavior may change. Use it to experiment and share feedback.

---

MCP server that exposes the [Front-End Architecture Playbook](https://github.com/tiagovilasboas/frontend-architecture-playbook) so **Cursor** (or any MCP client) can use its content: guides, cases, and navigation.

## What it exposes

### Resources (read-only)

| URI                       | Description                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `playbook://index`        | Full navigation and all guides (title, description, URL).                                                               |
| `playbook://cases`        | Real-world cases (Netflix, Spotify, eBay, Shopify, etc.) with challenge, solution, practices, results, and source link. |
| `playbook://guide/{slug}` | One guide by slug (e.g. `dependency-rule`, `how-to-choose`, `security`, `migration-strategies`).                        |

### Tools

| Tool                   | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| `playbook_search`      | Search by keyword in titles/descriptions. Args: `query` (string).           |
| `playbook_get_guide`   | Get one guide by slug. Args: `slug` (string).                               |
| `playbook_list_guides` | List all guides by section. No args.                                        |
| `playbook_get_cases`   | Get cases, optionally filter by company. Args: `company` (optional string). |

## Install and run

From the repo root:

```bash
cd mcp-server
npm install
npm run build
npm start
```

Or with `tsx` (no build):

```bash
cd mcp-server
npm install
npx tsx src/index.ts
```

## Configure Cursor to use this MCP server

1. **Build first:** from the repo root run `cd mcp-server && npm install && npm run build`. Cursor runs `dist/index.js`; without a build that file does not exist.
2. Open **Cursor Settings** → **MCP** (or edit the MCP config file directly).
3. Add a new server. You must use the **absolute path** on your machine to `mcp-server/dist/index.js` (inside your clone of this repo).

**Option A – Cursor UI (Settings → MCP → Add server)**

- **Name:** `frontend-playbook`
- **Command:** `node`
- **Arguments:** one argument, the absolute path to `mcp-server/dist/index.js`, e.g.  
  `["/Users/you/projects/frontend-architecture-playbook/mcp-server/dist/index.js"]`  
  To get the path: in a terminal, `cd` into `mcp-server` and run `pwd` (Mac/Linux) or `cd` (Windows), then append `/dist/index.js`.

**Option B – Config file**

Edit the MCP config (Cursor shows the config path in Settings → MCP; often `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "frontend-playbook": {
      "command": "node",
      "args": [
        "/Users/you/projects/frontend-architecture-playbook/mcp-server/dist/index.js"
      ]
    }
  }
}
```

Replace the path with the real absolute path to `mcp-server/dist/index.js` on your machine.

3. Restart Cursor (or reload MCP).
4. In chat, you can ask things like:
   - “What does the playbook say about dependency rule?”
   - “Search the playbook for security.”
   - “List the 19 cases from the playbook.”
   - “Which guide should I read for migration strategies?”

The model will use the MCP tools/resources to answer using the playbook content.

## Updating playbook data

The server reads from `mcp-server/data/`:

- `playbook.json` – navigation and guide metadata (title, description, href, slug).
- `cases.json` – subset or full list of real-world cases.

To add or change guides, edit `data/playbook.json`. To refresh cases from the main app, copy `src/data/cases.json` into `mcp-server/data/cases.json` (or run a small script that does that).

## Requirements

- Node.js 18+
- Built for **stdio** transport (Cursor spawns the process and talks over stdin/stdout).
