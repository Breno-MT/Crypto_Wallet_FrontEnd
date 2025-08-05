import { backEndURL } from "@/pages/utils/globals";

export async function registerUser(payload) {
  try {
    const response = await fetch(`${backEndURL}/user/register`, {
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
