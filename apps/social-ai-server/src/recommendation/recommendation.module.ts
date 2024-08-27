import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecommendationModuleBase } from "./base/recommendation.module.base";
import { RecommendationService } from "./recommendation.service";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationResolver } from "./recommendation.resolver";

@Module({
  imports: [RecommendationModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecommendationController],
  providers: [RecommendationService, RecommendationResolver],
  exports: [RecommendationService],
})
export class RecommendationModule {}
