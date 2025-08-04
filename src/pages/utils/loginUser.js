const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function loginUser(payload) {
  try {
    const response = await fetch(`${backendURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Oops! Something went wrong!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
