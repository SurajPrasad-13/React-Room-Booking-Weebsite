export async function fetchApi() {
  const response = await fetch("http://Localhost:4001/api/v1/room/all");
  const data = await response.json();
  return data;
}

fetchApi();

export const updateRoom = async (roomid, data) => {
  try {
    const response = await fetch(
      `http://localhost:4001/api/v1/room/update/${roomid}`,
      {
        method: "PATCH", // or "PATCH" depending on your backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Update failed");
    }

    console.log("Room updated:", result);
  } catch (error) {
    console.error("Error updating room:", error.message);
  }
};

export const deleteRoom = async (roomid) => {
  try {
    const response = await fetch(
      `http://Localhost:4001/api/v1/room/delete/${roomid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
