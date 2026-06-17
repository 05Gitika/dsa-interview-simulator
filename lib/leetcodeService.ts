interface TopicCount {
    tagName: string;
    problemsSolved: number;
}

interface LeetCodeProfile {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;

    tagProblemCounts: {
        advanced: TopicCount[];
        intermediate: TopicCount[];
        fundamental: TopicCount[];
    };
}

export async function getLeetCodeProfile(
    username: string
): Promise<LeetCodeProfile> {
    const response = await fetch(
        "https://leetcode.com/graphql",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    username

    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }

    tagProblemCounts {
      advanced {
        tagName
        problemsSolved
      }

      intermediate {
        tagName
        problemsSolved
      }

      fundamental {
        tagName
        problemsSolved
      }
    }
  }
}
        `,
                variables: {
                    username,
                },
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch LeetCode profile"
        );
    }

    const data = await response.json();
    console.log(
        "GRAPHQL RESPONSE",
        JSON.stringify(data, null, 2)
    );

    const user =
        data?.data?.matchedUser;

    if (!user) {
        throw new Error(
            "LeetCode user not found"
        );
    }

    const stats =
        user.submitStats.acSubmissionNum;

    const totalSolved =
        stats.find(
            (item: any) =>
                item.difficulty === "All"
        )?.count || 0;

    const easySolved =
        stats.find(
            (item: any) =>
                item.difficulty === "Easy"
        )?.count || 0;

    const mediumSolved =
        stats.find(
            (item: any) =>
                item.difficulty === "Medium"
        )?.count || 0;

    const hardSolved =
        stats.find(
            (item: any) =>
                item.difficulty === "Hard"
        )?.count || 0;

    return {
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,

        tagProblemCounts:
            user.tagProblemCounts,
    };
}