import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get()
  getRootRoute() {
    return "Root page -> /api";
  }

  @Get("/get")
  getAnotherRoute() {
    return "Another route -> /api/get";
  }
}
