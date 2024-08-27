import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecommendationServiceBase } from "./base/recommendation.service.base";

@Injectable()
export class RecommendationService extends RecommendationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
