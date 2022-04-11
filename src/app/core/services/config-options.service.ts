import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config!: ConfigModel;

  constructor() {}

  setConfig(updatedConfig: Partial<ConfigModel>): ConfigModel {
    this.config = {
      ...this.config,
      ...updatedConfig,
    };
    return this.config;
  }

  getConfig(): Readonly<ConfigModel> { 
    return this.config;
  }
}
