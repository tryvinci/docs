# Vinci API Documentation

Official documentation for the [Vinci's API Services](https://tryvinci.com) - AI-powered video generation, image creation, and digital content APIs.

## 🚀 Quick Start

- Studio: sign in at [app.tryvinci.com/studio](https://app.tryvinci.com/studio). See `quickstart.mdx`.
- Agents: connect any MCP client to `https://app.tryvinci.com/mcp` (OAuth sign-in, no API key). See `agents.mdx`.

The Developer API (`/api/v1/*`, API keys, `/dashboard/api`) and the old MCP at `tryvinci.com/api/agent/mcp` were deleted (COREPRODUC-763, COREPRODUC-764).

## 🛠 Documentation Development

This repository contains the source for Vinci's API documentation built with [Mintlify](https://mintlify.com).

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
├── essentials/            # Authentication, pricing
├── docs/
│   ├── api-reference/     # Complete API documentation
│   ├── guides/            # Developer guides and tutorials
│   └── platform/          # Platform-specific features
└── ai-tools/              # Development tools configuration
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