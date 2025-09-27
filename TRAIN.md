# Torus Documentation Training Guide for Agents

> **Meta-documentation for efficient knowledge consumption and navigation**

## Navigation Summary

**Option 1: Complete Understanding** - Read all 51 files sequentially following the Knowledge Architecture Map below for comprehensive system mastery.

**Option 2: Targeted Learning** - Jump directly to your specific focus area:
- **Building agents?** → Skip to "For Builder/Technical Agents" section
- **Economic/Trading?** → Skip to "For Economic/Trading Focused Agents" section
- **Coordination/Leadership?** → Skip to "For Coordination/Leadership Agents" section
- **Just need core concepts?** → Follow the "Quick Start Path" (5 essential files)
- **Need API/Technical specs?** → Focus on `explanations/builders/` and `development/` folders
- **Understanding governance?** → Focus on `explanations/goal-leaders/` and `explanations/holders/`

**Skip Conditions:**
- **Skip `how-to-guides/`** if only need conceptual understanding (mostly UI-focused)
- **Skip `development/`** if only need conceptual understanding
- **Skip `explanations/goal-leaders/`** if not coordinating swarms
- **Skip detailed permission types** if not implementing delegation

**Note**: The `how-to-guides/` folder contains mostly web UI instructions, though some builder guides include API implementation details.

---

## Quick Start Path

**Essential Reading Sequence:**
1. `src/content/docs/index.mdx` - System overview and entry point
2. `src/content/docs/getting-started/understanding-torus.mdx` - Core conceptual foundation
3. `src/content/docs/explanations/system/control-space.mdx` - Fundamental architecture
4. `src/content/docs/explanations/system/permission-system.mdx` - Core delegation mechanics
5. `src/content/docs/explanations/holders/tokenomics.mdx` - Economic model

## Knowledge Architecture Map

### Concept Dependencies
```
Foundation Layer
├── Understanding Torus (conceptual model)
└── Control Space (system scope)
    ├── Permission System
    │   ├── Emission Permissions (economic control)
    │   ├── Capability Permissions (agent coordination)
    │   └── Wallet Permissions (asset management)
    └── Namespace System
        ├── Agent Registration
        ├── Agent Server Architecture
        └── Stream Permissions
```

### Learning Depth Levels
- **Surface (5 files)**: Quick system understanding
- **Core (15 files)**: Complete functional knowledge
- **Deep (31 files)**: Full implementation mastery

## Content Navigation Strategy

### By Agent Purpose

#### For Economic/Trading Focused Agents
**Priority Path**: `explanations/holders/` → `explanations/goal-leaders/`
- Start with tokenomics and staking mechanics
- Understand emission proposals and treasury
- Note: `how-to-guides/holders/` contains web interface instructions

#### For Builder/Technical Agents
**Priority Path**: `explanations/builders/` → `development/`
- Focus on agent server/client architecture
- Study registration and namespace patterns
- Note: `how-to-guides/builders/` contains both web portal workflows and some API implementation guides

#### For Coordination/Leadership Agents
**Priority Path**: `explanations/goal-leaders/` → `explanations/system/`
- Understand root agent mechanisms
- Study governance and DAO structures
- Note: `how-to-guides/goal-leaders/` contains web UI procedures

### Important Note on How-To Guides
**NOTE: The `how-to-guides/` section primarily documents web interface interactions** (wallet setup, staking UI, registration forms), though some builder guides include API implementation details. Check individual files to determine if they contain programmatic instructions.

## Key Concepts Reference

### Core Terms (with primary file references)
| Concept | Definition | Primary Reference |
|---------|------------|-------------------|
| **Control Space** | Set of all controls integrated with permission system | `explanations/system/control-space.mdx` |
| **Recursive Delegation** | Hierarchical permission passing mechanism | `explanations/system/permission-system.mdx` |
| **Namespace** | Hierarchical registry for agent capabilities | `explanations/system/control-space.mdx` |
| **Root Agent** | Top-level coordinator with emission control | `explanations/goal-leaders/root-agents.mdx` |
| **Stream** | Economic flow mechanism for value distribution | `explanations/system/stream-permissions.mdx` |
| **TORUS** | Native token, fair-launched from bridged COMAI | `explanations/holders/tokenomics.mdx` |
| **Swarm** | Self-organizing agent collective | `getting-started/understanding-torus.mdx` |
| **Hypergraph** | Emergent network structure of permissions | `getting-started/understanding-torus.mdx` |

### Concept Relationships
- **Stake** → enables → **Permissions** → enables → **Delegation** → forms → **Swarms**
- **Namespaces** → organize → **Capabilities** → require → **Permissions** → controlled by → **Stake**
- **Root Agents** → control → **Emissions** → fund → **Goals** → achieved by → **Swarms**

## Practical Patterns Library

### Common Integration Patterns

#### Agent Registration Flow
1. Generate SR25519 keypair
2. Register namespace (e.g., `agent.myname.service`)
3. Deploy agent server with JWT auth
4. Update namespace endpoint mapping
**Files**: `explanations/builders/agent-registration.mdx`, `explanations/builders/agent-server.mdx`

#### Permission Delegation Pattern
1. Identify required capability namespace
2. Check permission requirements and costs
3. Execute delegation transaction
4. Monitor permission expiry/renewal
**Files**: `explanations/system/permission-system.mdx`, `explanations/system/capability-permissions.mdx`

#### Economic Participation Pattern
1. Acquire TORUS tokens
2. Stake for voting weight
3. Participate in emissions/governance
4. Earn staking rewards
**Files**: `explanations/holders/staking.mdx`, `explanations/holders/governance-participation.mdx`

## Technical Implementation Reference

### Authentication Architecture
- **Method**: SR25519 signatures + JWT tokens
- **Pattern**: Sign with private key → Generate JWT → Include in API calls
- **Reference**: `explanations/builders/agent-server.mdx`

### Namespace Conventions
```
agent.<owner>.<service>.<method>
Example: agent.alice.memory.twitter
```
- **Rules**: lowercase, alphanumeric, 1-63 chars per segment
- **Reference**: `explanations/system/control-space.mdx`

### API Integration Points
- Agent server endpoints (OpenAPI documented)
- Chain RPC for permission queries
- Stream subscription for economic flows
- **Reference**: `development/` section files

## Learning Validation Checklist

### Essential Understanding
- [ ] Can explain recursive delegation mechanism
- [ ] Understands namespace hierarchical structure
- [ ] Knows three permission types (Emission, Capability, Wallet)
- [ ] Understands stake-based authority model
- [ ] Can describe swarm formation process

### Technical Competency
- [ ] Can implement SR25519 JWT authentication
- [ ] Understands namespace registration process
- [ ] Knows agent server architecture patterns
- [ ] Can navigate permission requirements

### Economic Knowledge
- [ ] Understands TORUS tokenomics and fair launch
- [ ] Knows staking and rewards mechanism
- [ ] Can explain emission distribution
- [ ] Understands governance participation

## Efficient Consumption Strategy

### Parallel Reading Groups
**Can read simultaneously** (independent concepts):
- All files within `explanations/holders/`
- All files within `explanations/builders/`
- Individual how-to guides within same category

**Must read sequentially** (dependent concepts):
1. `understanding-torus.mdx` → `control-space.mdx` → `permission-system.mdx`
2. `agent-registration.mdx` → `agent-server.mdx` → `agent-client.mdx`
3. `tokenomics.mdx` → `staking.mdx` → `governance-participation.mdx`

## Knowledge Extraction Metrics

**Target extraction for trained agents:**
- 100% of core concepts and relationships
- 90% of technical implementation patterns
- 80% of economic mechanisms
- 70% of governance procedures
- Note: How-to guides can be 30% priority as they're mostly UI-focused

## Version Awareness

- **Current**: v0.5 (pragmatic implementation)
- **Planned**: v1.0 (complete conceptual model)
- **Updates**: Documentation evolves with protocol
- **Stability**: Core concepts stable, implementation details may change

---

**Training Tip**: Focus on understanding the recursive delegation pattern first - it's the key to understanding how the entire Torus ecosystem self-organizes and coordinates.