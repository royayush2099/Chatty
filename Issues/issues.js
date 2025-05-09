//production issues 
//error TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError
//
/**
 * Yes — you’ve correctly found the root issue. This is a known breaking change in
 *  Express v5 related to how route
 *  patterns are parsed using the path-to-regexp package.
 * 
 * app.get("*",(req,res)=>{  // ⛔ breaks in Express v5 if not written properly
    res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"));
})
Change this fallback route to use a named wildcard:

js
Copy
Edit
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
 */