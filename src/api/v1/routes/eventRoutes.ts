import { Router } from "express";
import { validate } from "../middleware/validate.middleware";
import { createEventSchema } from "../validation/event.validation";
import { HTTP_STATUS } from "../../../constants/httpStatus";
import { createEvent } from "../controllers/eventController";

const router = Router();

router.post("/", validate(createEventSchema),
  createEvent
);

router.get("/", (req, res) => {
  res.status(HTTP_STATUS.OK).json({
    message: "Events endpoint working",
  });
});

export default router;