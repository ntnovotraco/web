/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      nome: string;
      email: string;
      role: string;
    };
  }
}
