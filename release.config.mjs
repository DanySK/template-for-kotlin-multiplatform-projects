const publishCmd = `
./gradlew publishAllPublicationsToProjectLocalRepository zipMavenCentralPortalPublication releaseMavenCentralPortalPublication || exit 1
./gradlew publishJsPackageToNpmjsRegistry || exit 4
`
import config from 'semantic-release-preconfigured-conventional-commits' with { type: "json" };
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git",
)
export default config
