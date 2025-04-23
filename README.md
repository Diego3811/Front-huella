# FrontHuella

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# User Manual: Biometric Verification System

## Introduction

Welcome to the Fingerprint Biometric Verification System. This application allows you to scan, capture, and verify fingerprints quickly and securely.

## System Requirements

- Updated web browser (Chrome, Firefox, Edge)
- Fingerprint reader connected to the system
- API service running at http://localhost:15000

## Instructions for Use

### System Startup

1. Open the application in your browser
2. The main interface with a fingerprint icon will be displayed

### Fingerprint Capture

1. Place your finger on the fingerprint reader
2. Click the "Start Scan" button
3. Remain still while the scanning process completes
4. The scanning animation will indicate that the process is in progress

### Interpreting Results

After scanning, the application will display one of the following states:

- **Success**: If the fingerprint is recognized, you will see the corresponding user information
- **Error**: If a problem occurs during scanning, an error message will be displayed

### Data Displayed After Successful Verification

- User name
- User ID
- Department
- Access level
- Last verification (date and time)

### Additional Options

- **Scan Again**: Allows you to perform a new scan after successful recognition
- **Try Again**: Restarts the process after an error

## Troubleshooting

### The Application Does Not Detect the Fingerprint Reader

- Verify that the reader is properly connected
- Check that the API service is running at http://localhost:15000

### Error During Scanning

- Clean the reader surface
- Make sure to place your finger correctly
- Try again with another finger

### Fingerprint Not Recognized

- The user may not be registered in the system
- The fingerprint quality may be insufficient

## Technical Support

If you encounter problems with the system, please contact the technical support department.
