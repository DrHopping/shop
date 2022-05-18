import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { retry, take } from 'rxjs';
import { ConfigModel } from '../models/config.model';
import {
  LocalStorageService,
  LocalStorageServiceToken,
} from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private config!: ConfigModel;
  private key = 'config';
  private configPath = 'assets/app-settings.json';
  private defaultConfig: ConfigModel = {
    delay: 1000,
  };

  constructor(
    @Inject(LocalStorageServiceToken)
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {}

  initialize() {
    if (this.storageService.isKeyExists(this.key)) {
      this.setConfig(this.storageService.get<ConfigModel>(this.key));
    } else {
      const observer = {
        next: (res: ConfigModel) => this.setConfig(res),
        error: () => this.setConfig(this.defaultConfig),
      };
      this.http
        .get<ConfigModel>(this.configPath)
        .pipe(take(1), retry(2))
        .subscribe(observer);
    }
  }

  setConfig(updatedConfig: Partial<ConfigModel>): ConfigModel {
    this.config = {
      ...this.config,
      ...updatedConfig,
    };
    this.storageService.set(this.key, this.config);
    return this.config;
  }

  getConfig(): Readonly<ConfigModel> {
    return this.config;
  }

  getConfigValue(key: keyof ConfigModel) {
    return this.config[key];
  }
}
