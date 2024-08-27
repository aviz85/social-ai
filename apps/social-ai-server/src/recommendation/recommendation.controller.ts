import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecommendationService } from "./recommendation.service";
import { RecommendationControllerBase } from "./base/recommendation.controller.base";

@swagger.ApiTags("recommendations")
@common.Controller("recommendations")
export class RecommendationController extends RecommendationControllerBase {
  constructor(
    protected readonly service: RecommendationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
