# Torus Documentation TODOs

This file contains comprehensive documentation tasks to bridge the conceptual gaps between the sophisticated Torus blockchain implementation and user understanding. The approach uses **sequential learning paths** - breaking complex topics into digestible, connected pieces that build on each other.

## HIGH PRIORITY - Core Understanding

### 1. Economics Learning Path (4 Sequential Files)

**Overall Goal:** Transform user understanding from "simple staking" to sophisticated multi-stakeholder economic system with matrix-based reward distribution.

**Learning Progression:** Foundation → Distribution → Technical Depth → Advanced Economics

#### 1.1 `validator-miner-roles.mdx` (Foundation - 5 min read)

**Core Concept:** Two distinct participant types in Torus with different functions and rewards.

**Why This First:** Users must understand the roles before they can understand the reward system.

**Key Points:**
- Validators assess quality and assign weights (like judges)
- Miners provide actual services via APIs (like service providers)
- Different roles = different reward streams (dividends vs incentives)
- Simple analogy: Validators are critics, miners are performers

**Small Example:**
```
Alice (Validator): Reviews and scores service quality
Bob (Miner): Runs Twitter memory API service
Carol (Miner): Provides GPU compute services

Alice assigns weights: Bob=100, Carol=200 (Carol provides better service)
Results: Bob gets incentives, Carol gets 2x incentives, Alice gets dividends
```

**Code References:**
- `torus-substrate/README.md` - Terminology section
- `torus-substrate/pallets/torus0/src/agent.rs` - Agent types
- `torus-substrate/docs/linear-emission.md` - Validator/miner distinction

**Leads To:** "Now that you understand the roles, let's see how they get rewarded..."

---

#### 1.2 `emission-distribution-basics.mdx` (Building on Roles - 7 min read)

**Core Concept:** 64,000 tokens per day distributed every 100 blocks based on validator weight assignments.

**Why This Next:** Users need to understand the basic flow before complex calculations.

**Key Points:**
- Daily emission: 64,000 TORUS tokens (10,800 blocks, ~8 seconds each)
- Distribution cycle: Every 100 blocks (~13 minutes)
- Weight assignment drives distribution
- Pending emission accumulates then distributes

**Small Example:**
```
Day 1, Block 1-100: Accumulate ~593 TORUS tokens
Block 100: Distribution time!

Alice's weights: Bob=100, Carol=200 (total=300)
Alice's stake: 1000 TORUS

Distribution calculation (simplified):
- Bob gets: (100/300) × Alice's_influence × total_pool
- Carol gets: (200/300) × Alice's_influence × total_pool  
- Alice gets dividends based on their performance
```

**Code References:**
- `torus-substrate/docs/linear-emission.md` - Accumulation and distribution
- `torus-substrate/pallets/emission0/src/distribute.rs` - Distribution logic
- `torus-substrate/pallets/emission0/src/lib.rs` - Block emission parameters

**Leads To:** "But how exactly are these weights turned into precise token amounts?"

---

#### 1.3 `matrix-reward-calculations.mdx` (Technical Depth - 10 min read)

**Core Concept:** Matrix mathematics ensures fair multi-party reward distribution.

**Why This Next:** Users who want deeper understanding need to see the mathematical foundation.

**Key Points:**
- Sparse matrix multiplication: weights × stakes = miner ranks
- Hadamard product: element-wise multiplication for validator bonds
- Normalization: ensures fair distribution regardless of network size
- Feedback loop: successful miners increase their validators' dividends

**Small Example:**
```
Simple 2×2 case:
Validators: Alice (1000 stake), Dave (500 stake)
Miners: Bob, Carol

Weight Matrix:    Stake Vector:    Results:
Alice: [100, 200]    [1000]    →  Miner incentives
Dave:  [50,  300]    [500]     →  Validator dividends

Matrix math ensures:
- Higher stake validators have more influence
- Better miners (higher weights) get more rewards
- Validators who pick winners get more dividends
```

**Code References:**
- `torus-substrate/pallets/emission0/src/distribute/math.rs` - Matrix operations
- `torus-substrate/docs/linear-emission.md` - Mathematical explanation
- `torus-substrate/pallets/emission0/src/distribute.rs` - Implementation

**Leads To:** "These calculations create different income streams and fees..."

---

#### 1.4 `fee-economics.mdx` (Advanced Economics - 8 min read)

**Core Concept:** Delegation fees and weight control fees create sustainable economic incentives.

**Why This Last:** Users need to understand the full system before grasping the fee structures.

**Key Points:**
- Delegation fees: Validators charge stakers for using their validation services
- Weight control fees: Validators can delegate weight-setting to specialists
- Economic incentives: Fees align interests between all parties
- Sustainability: Good performance attracts more delegation

**Small Example:**
```
Complete Economic Flow:
1. Alice (1000 TORUS) stakes with Dave (validator)
2. Dave charges 10% delegation fee
3. Dave delegates weight control to Expert Eve (5% fee)
4. Eve assigns weights: Bob=100, Carol=200
5. Distribution happens:
   - Bob/Carol get incentives
   - Dave gets dividends minus fees to Eve and Alice
   - Alice gets staking rewards minus Dave's fee
   - Eve gets weight control fee for her expertise
```

**Code References:**
- `torus-substrate/pallets/torus0/src/fee.rs` - Fee mechanisms
- `torus-substrate/pallets/emission0/src/weight_control.rs` - Weight delegation
- `torus-substrate/docs/linear-emission.md` - Fee processing

**Connects Back:** "This completes the economic loop we started with validator/miner roles"

---

### 2. Advanced Permissions Learning Path (3 Sequential Files)

**Overall Goal:** Move from basic "delegation" understanding to sophisticated recursive permission trees with enforcement.

**Learning Progression:** Basic Trees → Control Mechanisms → Advanced Governance

#### 2.1 `basic-delegation-trees.mdx` (Foundation - 6 min read)

**Core Concept:** Recursive permission chains enable specialization at multiple levels.

**Why This First:** Users need to grasp basic recursion before complex controls.

**Key Points:**
- Delegation chains: Alice → Bob → Carol → Dave
- Percentage compounding: 30% × 50% × 20% = 3% of original
- Specialization benefits: Each level adds specific value
- Positive-sum economics: Everyone benefits when the chain works

**Small Example:**
```
Delegation Tree:
Alice (Root emissions) 
  ↓ delegates 30% to Bob (Platform operator)
    Bob (Platform services)
      ↓ delegates 50% to Carol (AI specialist) 
        Carol (AI services)
          ↓ delegates 20% to Dave (Model trainer)

Result: Dave gets 3% of Alice's original emissions
But: Dave's specialization makes the whole chain more valuable
```

**Code References:**
- `torus-substrate/pallets/permission0/src/permission.rs` - Permission structures
- `torus-substrate/docs/permission0.md` - Recursive delegation concept

**Leads To:** "But what if you want more control over when payments happen?"

---

#### 2.2 `distribution-controls.mdx` (Building Complexity - 7 min read)

**Core Concept:** Different distribution mechanisms (manual, automatic, timed, threshold) serve different business relationships.

**Why This Next:** Users need to understand timing/control options before governance mechanisms.

**Key Points:**
- Manual: Recipient requests payment when work is done
- Automatic: Payment when accumulated amount hits threshold
- Timed: Payment at specific block or intervals
- Different trust levels require different controls

**Small Example:**
```
Business Scenarios:
- Manual: "Pay me when I deliver the analysis" (project work)
- Automatic: "Pay me every 1000 TORUS accumulated" (ongoing service)
- AtBlock: "Pay me at block 500000" (milestone payment)
- Interval: "Pay me every 1000 blocks" (salary-like)

Same delegation, different timing = different business relationships
```

**Code References:**
- `torus-substrate/pallets/permission0/src/permission.rs` - DistributionControl enum
- `torus-substrate/docs/permission0.md` - Distribution mechanisms

**Leads To:** "Sometimes you need third parties to verify conditions..."

---

#### 2.3 `enforcement-authorities.mdx` (Advanced Governance - 9 min read)

**Core Concept:** Off-chain verification with on-chain execution enables complex business conditions.

**Why This Last:** Most sophisticated concept requiring understanding of previous permission mechanics.

**Key Points:**
- Bridge real-world conditions to blockchain execution
- Multi-signature governance for permission control
- Off-chain verification, on-chain enforcement
- Enable complex business relationships that can't be fully coded

**Small Example:**
```
Scenario: AI Service with Quality Requirements
1. Alice delegates to Bob's AI service
2. Enforcement authority: Committee of 3 AI experts
3. Condition: Service must maintain 95% accuracy
4. Process:
   - Experts verify off-chain performance metrics
   - 2 of 3 experts must vote to continue payments
   - If performance drops, experts can pause accumulation
   - Blockchain enforces the committee's decisions
```

**Code References:**
- `torus-substrate/pallets/permission0/src/permission.rs` - EnforcementAuthority
- `torus-substrate/docs/permission0.md` - Enforcement system
- `torus-substrate/pallets/permission0/src/ext/` - Implementation

**Connects Back:** "These authorities can control the delegation trees you learned about"

---

### 3. Network Management Learning Path (3 Sequential Files)

**Overall Goal:** Show how Torus maintains network health through sophisticated agent lifecycle management.

**Learning Progression:** Individual Journey → Scarcity Economics → Selection Mechanisms

#### 3.1 `agent-registration-lifecycle.mdx` (Foundation - 6 min read)

**Core Concept:** Agent journey from registration through participation to potential removal.

**Why This First:** Users need to understand individual experience before system-wide mechanics.

**Key Points:**
- Registration → metadata setup → weight assignment → reward participation
- Not all agents participate equally (consensus vs general participation)
- Performance tracking and potential pruning
- Economic incentives at each stage

**Small Example:**
```
Bob's Agent Journey:
Day 1: Registers agent, pays fee, sets up metadata
Day 2-7: Builds reputation, starts getting small weights
Day 8-30: Consistent service, weight assignments increase
Day 31+: Either thriving (more weights) or struggling (risk pruning)

Success path: Better service → higher weights → more rewards
Failure path: Poor service → low weights → potential removal
```

**Code References:**
- `torus-substrate/pallets/torus0/src/agent.rs` - Agent lifecycle
- `torus-substrate/README.md` - Agent terminology

**Leads To:** "But what happens when too many agents want to join?"

---

#### 3.2 `network-capacity-economics.mdx` (Scarcity Mechanics - 7 min read)

**Core Concept:** Dynamic burn mechanism maintains network quality through economic scarcity.

**Why This Next:** Users need to understand capacity constraints before selection mechanisms.

**Key Points:**
- Network has optimal size for efficiency
- Burn costs increase when network approaches capacity
- Economic barrier prevents spam/low-quality registrations
- Market-based quality control

**Small Example:**
```
Network States:
50% capacity: Registration fee = 10 TORUS (base cost only)
80% capacity: Registration fee = 25 TORUS (burn mechanism activates)
95% capacity: Registration fee = 100 TORUS (high barrier to entry)
100% capacity: Registration requires someone else to be pruned

Result: Only high-value agents join when network is full
Quality increases as scarcity increases
```

**Code References:**
- `torus-substrate/pallets/torus0/src/burn.rs` - Burn mechanism
- `torus-substrate/README.md` - Burn terminology

**Leads To:** "Who gets to participate when space is limited?"

---

#### 3.3 `consensus-participation.mdx` (Selection Mechanisms - 8 min read)

**Core Concept:** Not all agents become validators; selection based on stake and governance trust.

**Why This Last:** Most complex concept requiring understanding of agent lifecycle and capacity constraints.

**Key Points:**
- Consensus members vs general agents distinction
- Stake thresholds for validator participation
- Allocator roles (governance-selected trusted validators)
- Lazy registration during reward epochs

**Small Example:**
```
Agent Categories:
- General agents: Can receive weights, participate in economy
- Validators: Top staked agents, can assign weights to others
- Allocators: Governance-trusted validators, special permissions
- Consensus members: Active participants in current reward epoch

Selection Process:
1. All agents can register and provide services
2. Only top-staked become validators (limited slots)
3. Governance selects some validators as allocators  
4. Only consensus members participate in each reward cycle
```

**Code References:**
- `torus-substrate/pallets/governance/src/roles.rs` - Allocator roles
- `torus-substrate/pallets/emission0/src/distribute.rs` - Consensus member management
- `torus-substrate/docs/linear-emission.md` - Consensus member aggregation

**Connects Back:** "This determines who can assign the weights we learned about in economics"

---

## MEDIUM PRIORITY - System Understanding

### 4. Advanced Governance Learning Path (2 Sequential Files)

**Overall Goal:** Move beyond basic DAO voting to understand sophisticated governance economics and specialized roles.

**Learning Progression:** Economic Incentives → Specialized Governance

#### 4.1 `governance-economics.mdx` (Foundation - 6 min read)

**Core Concept:** Quadratic proposal rewards and treasury mechanics create democratic governance incentives.

**Why This First:** Users need to understand the economic incentives before specialized roles.

**Key Points:**
- Quadratic formula: √stake gives voting power (favors smaller stakeholders)
- Treasury funding from fees and emissions
- Proposal rewards incentivize participation
- Economic democracy vs plutocracy

**Small Example:**
```
Proposal Voting Power:
- Whale (10,000 TORUS): √10,000 = 100 voting power
- Medium (1,000 TORUS): √1,000 = 31.6 voting power  
- Small (100 TORUS): √100 = 10 voting power
- 1000 tiny holders (1 TORUS each): 1000 × √1 = 1000 voting power

Result: Collective small holders > individual whale
Economic incentive: Everyone benefits from participation
```

**Code References:**
- `torus-substrate/pallets/governance/src/proposal.rs` - Proposal rewards
- `torus-substrate/pallets/governance/src/voting.rs` - Quadratic mechanics

**Leads To:** "But who can perform specialized governance functions?"

---

#### 4.2 `specialized-governance-roles.mdx` (Advanced Roles - 7 min read)

**Core Concept:** Curator permissions and allocator roles enable specialized governance beyond general voting.

**Why This Next:** Builds on economic understanding to show governance specialization.

**Key Points:**
- Allocators: Governance-trusted validators with special permissions
- Curators: Specialized roles (application review, whitelist management, penalties)
- Permission delegation for governance functions
- Multi-signature governance mechanisms

**Small Example:**
```
Governance Specialization:
- General voters: Vote on proposals, get quadratic rewards
- Allocators: Chosen by governance, can assign weights to new agents
- Curators: Delegated specific powers:
  * Application review: Screen new agent applications
  * Whitelist management: Add/remove accounts from whitelist
  * Penalty control: Apply performance penalties

Result: Specialized governance scales better than direct democracy
```

**Code References:**
- `torus-substrate/pallets/governance/src/roles.rs` - Specialized roles
- `torus-substrate/pallets/permission0/src/permission/curator.rs` - Curator permissions

**Connects Back:** "These roles work within the economic incentives we learned about"

---

### 5. System Evolution Learning Path (2 Sequential Files)  

**Overall Goal:** Help users understand current capabilities vs future vision and make informed participation decisions.

**Learning Progression:** Current State → Future Evolution

#### 5.1 `v05-current-capabilities.mdx` (Current State - 6 min read)

**Core Concept:** v0.5 implements core building blocks but not full recursive competency vision.

**Why This First:** Users need to understand what's available now before future plans.

**Key Points:**
- "Pragmatic, growth-oriented" implementation
- Core mechanisms work: emission, permissions, namespaces, governance
- Agent swarms possible but require manual coordination
- "Battle testing" current systems

**Small Example:**
```
What Works Today:
✅ Alice can stake and earn rewards
✅ Bob can register agent and provide services  
✅ Carol can delegate permissions to Dave
✅ Network governance functions
✅ Economic incentives align participants

What Requires Manual Work:
🚧 Complex multi-agent coordination
🚧 Automatic swarm formation
🚧 Advanced competency discovery
```

**Code References:**
- `torus-substrate/README.md` - v0.5 positioning
- `torus-docs/src/content/docs/getting-started/understanding-torus.mdx` - Current description

**Leads To:** "How will this evolve into the full vision?"

---

#### 5.2 `evolution-roadmap.mdx` (Future Vision - 7 min read)

**Core Concept:** Path from current building blocks to full self-assembling agent swarms.

**Why This Next:** Users need roadmap context to make long-term participation decisions.

**Key Points:**
- Runtime upgrades preserve state while adding features
- Storage migrations enable system evolution
- v1 target: Full recursive competency networks
- Current participation prepares for future capabilities

**Small Example:**
```
Evolution Path:
v0.5 (Today): Manual agent coordination
- "Alice manually finds Bob's AI service"
- "Carol manually delegates to Dave"

v1 (Future): Automatic swarm assembly  
- "Alice signals need for Twitter analysis"
- "Network automatically assembles: Bob→Carol→Dave chain"
- "Swarm self-optimizes based on performance"

Bridge: Current building blocks → Future automation
```

**Code References:**
- `torus-substrate/pallets/*/migrations.rs` - Upgrade mechanisms
- Storage version management across pallets

**Connects Back:** "The economic and permission systems you learned enable this future automation"

---

## COMPANION HOW-TO GUIDES NEEDED

Several conceptual files would benefit from practical how-to companions that let users apply what they learned. These should be developed **after** the conceptual foundation is established.

### **High Priority How-To Guides (Phase 2)**

#### From Economics Path:
**`validator-miner-roles.mdx` needs:** "How to Choose Your Role: Validator vs Miner"
- **Content:** Role decision framework, resource requirements, setup steps
- **Why Important:** Fundamental participation decision users need guidance on
- **Links to:** Existing agent registration guides

**`fee-economics.mdx` needs:** "How to Set and Optimize Your Fees" 
- **Content:** Setting delegation fees, optimizing rates, fee market dynamics
- **Why Important:** Economic optimization many users miss
- **New Guide Required:** Not currently covered

#### From Permissions Path:
**`distribution-controls.mdx` needs:** "How to Choose Distribution Controls for Your Business"
- **Content:** Manual vs automatic vs timed decision trees, threshold setting
- **Why Important:** Critical for permission effectiveness, common confusion point
- **New Guide Required:** Advanced topic not covered

**`enforcement-authorities.mdx` needs:** "How to Set Up Enforcement Authorities"
- **Content:** Authority selection, multi-sig setup, condition definition
- **Why Important:** Powerful but complex feature, enables sophisticated contracts
- **New Guide Required:** Advanced governance topic

#### From Governance Path:
**`governance-economics.mdx` needs:** "How to Maximize Your Governance Participation"
- **Content:** Voting strategies, proposal timing, reward optimization
- **Why Important:** Economic opportunity users often miss
- **Enhancement Needed:** Expand existing governance guides

### **Medium Priority How-To Guides (Phase 3)**

#### From Economics Path:
**`emission-distribution-basics.mdx` could use:** "How to Track and Predict Your Emissions"
- **Content:** Understanding your reward calculations, timing predictions
- **Why Useful:** Helps users plan and optimize participation
- **New Guide Required:** Analytics/tracking focused

#### From Network Path:
**`agent-registration-lifecycle.mdx` could use:** "How to Optimize Your Agent for Long-term Success"
- **Content:** Performance optimization, reputation building, avoiding pruning
- **Why Useful:** Agent sustainability strategies
- **Enhancement:** Build on existing registration guides

### **Cross-Linking Strategy**

#### **Concept → Practice Flow:**
Each conceptual file should end with:
```markdown
## Ready to Apply This?

Now that you understand [concept], put it into practice:
- 📋 [Primary How-to Guide] - Step-by-step implementation
- 🔗 [Related How-to Guide] - Connected actions

## Continue Learning
📖 Next concept: [Next file in learning path]
🔄 Review: [Previous concept if needed]
```

#### **Practice → Concept Flow:**
Each how-to guide should include:
```markdown
## Why This Works

For deeper understanding of the concepts behind these steps:
- 🧠 [Conceptual explanation] - Economic/technical background
- 💡 [Advanced concepts] - Next level understanding
```

### **Updates to Existing How-To Guides**

#### **Enhancement Opportunities:**
**Current agent registration guides** → Add links to:
- Agent lifecycle concepts (why registration matters)
- Validator vs miner role concepts (strategic decisions)

**Current delegation guides** → Add links to:
- Delegation tree concepts (economic reasoning)
- Distribution control concepts (timing strategies)

**Current staking guides** → Add links to:
- Economics concepts (how rewards really work)
- Fee economics (optimization strategies)

### **Implementation Phases**

#### **Phase 1: Conceptual Foundation (Priority)**
Write all 14 conceptual files first. Users need to understand "why" before "how."

#### **Phase 2: High-Impact How-Tos**
Focus on guides that address common confusion or unlock significant value:
1. Distribution controls guide (biggest confusion point)
2. Enforcement authorities guide (powerful but complex)
3. Governance optimization guide (missed economic opportunity)
4. Role selection guide (fundamental decision)

#### **Phase 3: Enhancement and Polish**
- Cross-link existing guides with new concepts
- Add medium-priority how-to guides based on user feedback
- Create learning path navigation

#### **Success Metrics:**
- **Conceptual understanding:** Users ask sophisticated questions instead of basic ones
- **Practical application:** Increased usage of advanced features (enforcement authorities, complex distributions)
- **Economic optimization:** Better fee strategies, governance participation
- **Cross-referencing:** Users naturally move between concept and practice content

---

## IMPLEMENTATION GUIDANCE

### Sequential Learning Implementation

**Directory Structure:**
```
/explanations/
  /economics/          # 4-file learning path
    - validator-miner-roles.mdx
    - emission-distribution-basics.mdx  
    - matrix-reward-calculations.mdx
    - fee-economics.mdx
  /permissions/        # 3-file learning path
    - basic-delegation-trees.mdx
    - distribution-controls.mdx
    - enforcement-authorities.mdx
  /network/           # 3-file learning path
    - agent-registration-lifecycle.mdx
    - network-capacity-economics.mdx
    - consensus-participation.mdx
  /governance/        # 2-file learning path
    - governance-economics.mdx
    - specialized-governance-roles.mdx
  /evolution/         # 2-file learning path
    - v05-current-capabilities.mdx
    - evolution-roadmap.mdx
```

**Each File Should Include:**
1. **Single Core Concept** - One main idea per file  
2. **Why This Now** - Progression rationale
3. **Concrete Examples** - Real scenarios users can relate to
4. **Code References** - Where to find implementation
5. **Forward Link** - "Next, learn about..."
6. **Backward References** - "Remember from previous file..."

### Writing Style Guidelines

**For Conceptual Documentation:**
- Start with "Why does this exist?" before "How does it work?"
- Use concrete scenarios over abstract descriptions
- Show economic flows and incentive structures
- Connect to user goals and decision-making
- Avoid technical implementation details
- Use analogies from familiar systems

### Visual Aid Requirements

**Essential Diagrams for Each Topic:**
- System flow diagrams showing cause and effect
- Economic relationship maps
- Decision trees for user actions
- Timeline visualizations for processes
- Comparative tables for understanding trade-offs

### Cross-References Strategy

**Link Integration:**
- Connect new content to existing how-to guides
- Reference related concepts in other explanations
- Create learning paths from basic to advanced concepts
- Maintain glossary updates with new terminology

### Validation Approach

**Content Accuracy:**
- Cross-reference with substrate implementation code
- Validate examples against actual blockchain behavior
- Test user comprehension with community feedback
- Update when substrate code evolves

---

## NOTES FOR IMPLEMENTATION

### Priority Order Rationale
1. **Economics (4 files)** - Most fundamental misunderstanding, sequential learning essential
2. **Permissions (3 files)** - Core to Torus vision, builds complexity gradually  
3. **Network Management (3 files)** - Important for participation decisions
4. **Governance (2 files)** - Build on existing foundation, shorter learning path
5. **Evolution (2 files)** - Context setting, helps with expectations

**Total: 14 digestible files instead of 5 overwhelming documents**

**Note:** Namespace system is already well-covered in `/explanations/v05/capability-permissions.mdx` and `/explanations/v05/control-space.mdx`

### Resource Requirements
- Technical writer familiar with blockchain economics
- Graphic designer for system diagrams
- Substrate developer for code reference validation
- Community feedback mechanism for comprehension testing

### Success Metrics
- User questions shift from "how do I stake?" to "how do I optimize my delegation tree?"
- Reduced confusion about validator vs miner roles
- Increased sophisticated usage of permission system
- Better informed governance participation

---

## RELATED FILES TO UPDATE

When implementing these TODOs, also update:
- `/explanations/concepts-terminology.mdx` - Add new sophisticated terms
- Existing how-to guides - Reference new conceptual understanding
- `/getting-started/understanding-torus.mdx` - Deepen the introduction
- Navigation structure - Organize new explanations logically

The goal is transforming user understanding from "Torus is a staking network" to "Torus is a sophisticated coordination protocol with recursive economic incentives for autonomous agent swarms."