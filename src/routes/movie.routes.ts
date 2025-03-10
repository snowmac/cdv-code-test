import { Router, Request, Response } from "express";
import { getAllByOffsetAndLimit, getById } from "../services/movie.service";

const router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = 50;
    const offset = (page - 1) * limit;

    res.json(await getAllByOffsetAndLimit(offset, limit));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    res.json(await getById(id));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
