# 🚖 EEZY CABS API Gateway

This project is an API Gateway for a microservices-based taxi booking platform. It routes and orchestrates communication between various internal services like authentication, ride handling, driver management, and navigation.

---

## 📌 Table of Contents
- [Features](#-features)
- [Architecture](#-architecture-overview)
  - [Architectural Principles](#-architectural-principles)
  - [Folder Structure](#-folder-structure-simplified)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Documentation](#-documentation)
- [Contact](#-contact)

---

## ✨ Features
- Authentication & authorization
- Ride management system
- Real-time tracking
- Driver coordination
- Payment processing
- Analytics and reporting

---

## 🏗 Architecture Overview

This project follows a **modular monolith** architecture within the **API Gateway** pattern, tailored for microservices. It cleanly separates concerns and scales well across growing feature domains.

### 🔧 Architectural Principles

| Concept                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **Domain-Based Modularity** | Each feature (`accounts`, `rides`, `reports`, etc.) lives in its own folder with controllers, services, and DTOs. |
| **Clean Layered Structure** | Requests flow through Controllers → Services → Inter-Service Communication Layer, enforcing a clear separation of concerns. |
| **Shared Utilities & Contracts** | Guards, DTOs, interfaces, and utility functions are housed in a shared folder to promote reuse and consistency. |
| **Microservices Ready**     | The gateway forwards requests to backend services, maintaining a clear separation of concerns and enabling seamless scalability. |

---

### 📁 Folder Structure (Simplified)

```text
📦 src
├── 📂 modules                # Domain-based feature modules
│   ├── 📂 account             # Driver-specific logic
│   ├── 📂 rides              # Ride management system
│   │   ├── 🎨 rides.controller.ts    # HTTP request handlers
│   │   ├── ⚙️ rides.service.ts       # Core business logic
│   │   ├── 📜 rides.module.ts       # NestJS module definition
│   │   ├── 📂 dto            # Data Transfer Objects
│   │   │   ├── create-ride.dto.ts
│   │   │   └── update-ride.dto.ts
│   │   ├── 📂 interfaces     # Type definitions
│   │   │   └── ride.interface.ts
│   │   ├── 📂 guards         # Route protection
│   │   │   └── ride-owner.guard.ts
│   │   ├── 📜 rides.constants.ts    # Module-specific constants
│   │   └── 📂 rides-socket   # Real-time WebSocket handlers
│   ├── 📂 navigation         # Map services & routing logic
│   └── ...                   # Other business domains
│
├── 📂 shared                 # Cross-cutting concerns
│   ├── 📂 dto                # Common Data Transfer Objects
│   ├── 📂 guards             # Global guards (Auth, Roles)
│   ├── 📂 interfaces         # Shared TypeScript interfaces
│   └── 📂 utils              # Utility functions/helpers
│
├── 📜 main.ts                # Application entry point
└── 📜 app.module.ts          # Root module configuration
```

---

### 🎯 Why This Structure?

- ✅ Easier to maintain and extend new features  
- ✅ Loose coupling between business logics  
- ✅ Domain-focused for better team collaboration  
- ✅ Clean layering enforces SOLID principles  
- ✅ Scalable for future service decomposition

---

### 📌 Tech Stack

- **NestJS** (API Gateway)  
- **TypeScript**  
- **gRPC / REST / Kafka** for inter-service communication  
- **Docker** (Containerization)

---

### 🚀 Getting Started

```text
git clone https://github.com/EEZY-CABS/api-gateway.git
cd api-gateway
pnpm install
pnpm run start:dev
```

### 📬 Contact  

If you’re a recruiter or hiring manager and would like to see a live demo or get a walkthrough — feel free to reach out!  
👤 Name: Rishiraj Sajeev  
📧 Email: rishirajs2003@gmail.com  
📞 Phone: +91 7012256686  

---
