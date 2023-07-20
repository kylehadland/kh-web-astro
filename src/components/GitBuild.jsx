import { Octokit } from "@octokit/core"
import { useState, useEffect } from "react"

export default function GitBuild() {
  const octokit = new Octokit({
    auth: import.meta.env.SECRET_GH,
  })

  const [buildDate, setBuildDate] = useState(null)

  useEffect(() => {
    async function onLoad() {
      await octokit
        .request("GET /repos/{owner}/{repo}", {
          owner: "kylehadland",
          repo: "kh-web-astro",
        })
        .then((res) => {
          //   console.log(res)
          const pushedAt = res.data.pushed_at
          const pushedAtLocale = new Date(pushedAt).toLocaleString()
          setBuildDate(pushedAtLocale)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    onLoad()
  }, [])

  if (!buildDate) return "Getting GitHub build date..."
  return <p>Updated: {buildDate}</p>
}
