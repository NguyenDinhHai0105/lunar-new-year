## 1.Architecture design
```mermaid
graph TD
  A["User Browser"] --> B["React Frontend Application"]

  subgraph "Frontend Layer"
    B
  end

  subgraph "Local Data"
    C["Topics + Questions (Static JSON)"]
    D["Lucky Money Rules (Local Config)"]
  end

  B --> C
  B --> D
```

## 2.Technology Description
- Frontend: React@18 + vite + TypeScript + tailwindcss@3
- Backend: None (all logic and data bundled in the frontend)

## 3.Route definitions
| Route | Purpose |
|-------|---------|
| / | Main screen with two primary actions (lucky money reveal, topics navigation) |
| /topics | Topics screen to select a topic and view random questions |
