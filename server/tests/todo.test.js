const request = require("supertest")

const BASE_URL = "http://localhost:5000"

async function createTodo(title = "Test Todo") {
  const res = await request(BASE_URL)
    .post("/api/todos")
    .send({ title })
  return res.body
}

describe("Todo API Controller Tests", () => {

  // GET all todos
  describe("GET /api/todos", () => {
    it("should return all todos", async () => {
      const res = await request(BASE_URL).get("/api/todos").expect(200)
      expect(Array.isArray(res.body)).toBe(true)
    })
  })

  // GET single todo
  describe("GET /api/todos/:id", () => {
    it("should return a todo if id exists", async () => {
      const newTodo = await createTodo("Get Todo Test")
      const res = await request(BASE_URL).get(`/api/todos/${newTodo._id}`).expect(200)
      expect(res.body).toHaveProperty("title", "Get Todo Test")
    })

    it("should return 404 if todo not found", async () => {
      const fakeId = "63a4b6f1e3f8f0a5d1234567"
      const res = await request(BASE_URL).get(`/api/todos/${fakeId}`).expect(404)
      expect(res.body).toHaveProperty("error")
    })
  })

  // POST new todo
  describe("POST /api/todos", () => {
    it("should create a new todo", async () => {
      const res = await request(BASE_URL)
        .post("/api/todos")
        .send({ title: "New Task" })
        .expect(200)
      expect(res.body).toHaveProperty("_id")
      expect(res.body.isCompleted).toBe(false)
    })

    it("should return 400 if title missing", async () => {
      const res = await request(BASE_URL)
        .post("/api/todos")
        .send({})
        .expect(400)
      expect(res.body).toHaveProperty("error")
    })
  })

  // PATCH / update todo
  describe("PATCH /api/todos/:id", () => {
    it("should update isCompleted to true", async () => {
      const newTodo = await createTodo("Update Todo Test")
      const res = await request(BASE_URL)
        .patch(`/api/todos/${newTodo._id}`)
        .send({ isCompleted: true })
        .expect(200)
      expect(res.body.isCompleted).toBe(true)
    })

    it("should return 400 if todo not found", async () => {
      const fakeId = "63a4b6f1e3f8f0a5d1234567"
      const res = await request(BASE_URL)
        .patch(`/api/todos/${fakeId}`)
        .send({ isCompleted: true })
        .expect(400)
      expect(res.body).toHaveProperty("error")
    })
  })

  // DELETE todo
  describe("DELETE /api/todos/:id", () => {
    it("should delete a todo and return 200", async () => {
      const newTodo = await createTodo("Delete Todo Test")
      const res = await request(BASE_URL)
        .delete(`/api/todos/${newTodo._id}`)
        .expect(200)
      expect(res.body).toHaveProperty("message")
    })

    it("should return 400 if todo not found", async () => {
      const fakeId = "63a4b6f1e3f8f0a5d1234567"
      const res = await request(BASE_URL)
        .delete(`/api/todos/${fakeId}`)
        .expect(400)
      expect(res.body).toHaveProperty("error")
    })
  })

})
