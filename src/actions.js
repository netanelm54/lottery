const apiRequestActions = (action) => ({
  success: `${action}_SUCCESS`,
  error: `${action}_ERROR`,
  pending: `${action}_PENDING`,
});

export function fetchLottery(sortOrder) {
  return {
    type: "API_REQUEST",
    payload: {
      url: `lottery?sortOrder=${sortOrder}`,
      method: "get",
      nextActionType: apiRequestActions("FETCH_LOTTERY"),
    },
  };
}
