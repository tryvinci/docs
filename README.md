# Vinci Docs

Source of [docs.tryvinci.com](https://docs.tryvinci.com): the Vinci Studio, the Studio MCP for agents, and Adapt.

## 🚀 Quick Start

- Studio: sign in at [app.tryvinci.com/studio](https://app.tryvinci.com/studio). See `quickstart.mdx`.
- Agents: connect any MCP client to `https://app.tryvinci.com/mcp` (OAuth sign-in, no API key). See `agents.mdx`.

The Developer API (`/api/v1/*`, API keys, `/dashboard/api`) and the old MCP at `tryvinci.com/api/agent/mcp` were deleted (COREPRODUC-763, COREPRODUC-764). Their docs pages were deleted and redirect to `/agents`, `/quickstart` or `/learn` (COREPRODUC-783).

## 🛠 Documentation Development

This folder holds the source of the Vinci docs, built with [Mintlify](https://mintlify.com).

### Local Development

Install the Mintlify CLI:
```bash
npm i -g mint
```

Run the development server:
```bash
mint dev
```

View your local preview at `http://localhost:3000`.

### Project Structure

```
docs/
├── docs.json              # Main configuration
├── quickstart.mdx         # Quick start guide
├── agents.mdx             # Use Vinci from your agent (Studio MCP)
├── learn/                 # Studio guides
├── products/adapt/        # Adapt product docs
├── essentials/            # Mintlify writing reference (not in navigation)
├── docs/
│   └── guides/prompting/  # Prompting guides
```

### Contributing

1. Fork this repository
2. Make your changes locally using `mint dev`
3. Test your changes thoroughly
4. Submit a pull request

### Publishing

Changes are automatically deployed to [docs.tryvinci.com](https://docs.tryvinci.com) when pushed to the main branch.

## 🔗 Links

- **API Documentation**: [docs.tryvinci.com](https://docs.tryvinci.com)
- **Vinci Platform**: [tryvinci.com](https://tryvinci.com)
- **Dashboard**: [app.tryvinci.com](https://app.tryvinci.com)
- **Support**: [team@tryvinci.com](mailto:team@tryvinci.com)
- **Discord**: [tryvinci.com/discord](https://tryvinci.com/discord)

## 📝 License

This documentation is maintained by the Vinci team. For API usage terms, see [tryvinci.com/terms](https://tryvinci.com/terms).