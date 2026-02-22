import { Router } from "express";
import { validate } from "../middleware/validate.middleware";
import { createEventSchema } from "../validation/event.validation";
import { HTTP_STATUS } from "../../../constants/httpStatus";

const router = Router();

router.post(
  "/",
  validate(createEventSchema),
  (req, res) => {
    res.status(HTTP_STATUS.CREATED).json(req.body);
  }
);

export default router;