import { JsonpClientBackend } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';

export const LocalStorageServiceToken = new InjectionToken<LocalStorageService>('LocalStorageService');

export class LocalStorageService {
  constructor(protected storage: Storage) {}

  isKeyExists(key: string): boolean {
    return this.storage.getItem(key) !== null;
  }

  get<T = any>(key: string): T {
    if (!this.isKeyExists(key)) {
      throw new Error(`${key} is undefined`);
    }

    return JSON.parse(this.storage.getItem(key)!) as T;
  }

  set<T>(key: string, data: T) {
    this.storage.setItem(key, JSON.stringify(data));
  }
}
