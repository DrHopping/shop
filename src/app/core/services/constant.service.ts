import { InjectionToken } from "@angular/core";
import { AppConstants } from "../models/appConstants.model";

export const APP_CONSTANTS: AppConstants = {
  app: "Angular Course Shop",
  ver: "1.0",
  api_url: "https://localhost:5001"
}
export const APP_CONSTANTS_TOKEN = new InjectionToken<AppConstants>('APP_CONSTANTS');