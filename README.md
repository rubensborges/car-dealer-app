# Front-end JS Engineer Test: Car Dealer App

## Overview

This repository contains the solution for the **Car Dealer App**, which allows users to filter vehicles by type and model year. The app is built using **Next.js** and **Tailwind CSS**.

<img width="280" alt="Captura de Tela 2024-11-13 às 17 51 05" src="https://github.com/user-attachments/assets/de3651a9-526f-4c78-8a45-cfcd4f0c444f">

<img width="280" alt="Captura de Tela 2024-11-13 às 17 51 22" src="https://github.com/user-attachments/assets/58dfce87-65ed-4602-9daf-439f30df3ae2">

<img width="280" alt="Captura de Tela 2024-11-13 às 17 51 35" src="https://github.com/user-attachments/assets/b21f70ad-a1bd-4207-9a9d-214ac415d390">

<img width="280" alt="Captura de Tela 2024-11-13 às 17 51 46" src="https://github.com/user-attachments/assets/5b29b675-7bba-4200-a9d5-956cbfef0ee8">



## Features

- **Vehicle Filter Page**: Allows users to select a vehicle make and model year and navigate to a result page.
- **Result Page**: Displays vehicles based on the selected make and year.
- **Suspense Loading**: Utilizes React Suspense for data fetching and loading states.

## Project Setup

### 1. Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/rubensborges/car-dealer-app.git
cd car-dealer-app
```
### 2. Install Dependencies

Run the following command to install all necessary dependencies:
```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

NEXT_PUBLIC_VEHICLE_MAKES_API=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json NEXT_PUBLIC_VEHICLE_MODELS_API=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json 


- **NEXT_PUBLIC_VEHICLE_MAKES_API**: The API endpoint to fetch vehicle makes for filtering.
- **NEXT_PUBLIC_VEHICLE_MODELS_API**: The API endpoint to fetch models based on the make and model year.
- **NEXT_PUBLIC_TAILWIND_MODE**: Optional. Used to control the Tailwind CSS production mode.

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

This will start the app at `http://localhost:3000`. You can access the vehicle filter and results pages.


## API Endpoints

- **Vehicle Makes**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`  
  Fetches vehicle makes for the car type.
  
- **Vehicle Models**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`  
  Fetches vehicle models based on the make ID and model year.

## React Suspense

The app uses the **React Suspense** component to manage loading states. It is used both for fetching vehicle data and rendering UI components.

## Tailwind CSS

**Tailwind CSS** is used for styling, and the app is designed to be fully responsive. Custom styles can be added in the `tailwind.config.js` file if needed.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

