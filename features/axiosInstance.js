import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://dreamwayapi.sajidurapp.xyz",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjYsImVtYWlsIjoibnVzcmF0amFoYW50aXNoYTc2M0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRMZC9OeUIwaEJiVS45OUhDeFFkVDMuVjUwYS9RU0JsckZybnV1MU9wUGp3bERSOW9haUFIcSIsInBob25lIjoiMDE4MjYzNzQ4ODU0NCIsImFkZHJlc3MiOiJhZGRyZXNzMSIsInJvbGUiOiJhZG1pbiIsInZlcmlmaWVkIjoxLCJvdHAiOjI5NTkwNywiaXNBY3RpdmUiOjF9LCJpYXQiOjE2NjM1MjA4MDYsImV4cCI6MTY2MzY5MzYwNn0.f-VP_wZZMvctxDKgwZZbj4F0Q0YK-DTScDP3ClcdJF0`,
  },
});

export default axiosApi;
