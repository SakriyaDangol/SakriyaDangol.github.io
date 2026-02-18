# Sakriya Dangol - Angular Portfolio

This is the Angular version of my portfolio website, converted from the original HTML/CSS/JavaScript structure.

## Project Structure

```
src/
├── app/
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── components/
│       ├── navbar/
│       ├── profile/
│       ├── modules/
│       └── footer/
├── assets/
│   └── images/
│       ├── sakriya1.png
│       ├── githubimage.png
│       └── IMG_20230604_201459_476.jpg
└── styles.css
```

## Features

- **Component-Based Architecture**: Modern Angular components for better maintainability
- **TypeScript**: Type-safe development with interfaces and models
- **Routing**: Clean navigation between Profile and Projects sections
- **Responsive Design**: Mobile-friendly layout using Bootstrap
- **Data-Driven**: All project data is managed through TypeScript models

## Components

### Navbar Component
- Navigation links with active states
- Bootstrap integration for responsive behavior

### Profile Component
- Personal information display
- Contact details with icons
- Skills overview

### Modules Component
- Dynamic rendering of all modules and assignments
- Data-driven approach using TypeScript interfaces
- Support for GitHub links and live demos

### Footer Component
- Copyright information

## Data Models

The project uses TypeScript interfaces to define the structure of assignments and modules:

```typescript
interface Assignment {
  title: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  days: Day[];
}
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   ng serve
   ```

3. Open http://localhost:4200 in your browser

## Build for Production

```bash
ng build --prod
```

## Original Project

This Angular version is based on the original HTML/CSS/JavaScript portfolio located in the root directory. The original files are preserved for reference.

## Technologies Used

- Angular 17
- TypeScript
- Bootstrap 5
- CSS3
- HTML5

## License

This project is open source and available under the [MIT License](LICENSE).