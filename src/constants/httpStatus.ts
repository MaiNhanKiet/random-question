const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  UNPROCESSABLE_ENTITY: 422,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
  PARTIAL_CONTENT: 206,
  CONFLICT: 409
} as const

export default HTTP_STATUS
