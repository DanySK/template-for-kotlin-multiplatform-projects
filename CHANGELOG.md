## [0.2.5](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/compare/0.2.4...0.2.5) (2025-01-08)

### Dependency updates

* **core-deps:** update kotlin monorepo to v2.1.0 ([#663](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/663)) ([f881893](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f881893ee33107a71ae962d96af2068ebdf00f96))
* **deps:** update plugin kotlin-qa to v0.77.1 ([#671](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/671)) ([cd7a599](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/cd7a599c849089180d2269e32d3b6432b244db1e))
* **deps:** update plugin kotlin-qa to v0.78.0 ([#679](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/679)) ([9436fd6](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/9436fd6aa2d56a01c71ea4adf53af5565b50dbfc))
* **deps:** update plugin publishoncentral to v7.0.5-dev0w-f7d1ad3 ([#697](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/697)) ([4ee0167](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/4ee0167f82a7a8def8d18b0ceb36c9bcae32f963))

## [0.2.4](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/compare/0.2.3...0.2.4) (2025-01-08)

### Dependency updates

* **deps:** update dependency gradle to v8.12 ([#689](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/689)) ([3b49084](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3b49084a1da05d92f3f8b5448178575694835f85))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.117 ([#691](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/691)) ([6f8f3ed](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6f8f3ed63c14df0cf502436b97cd4d673b42c067))
* **deps:** update plugin npm-publish to v3.5.0 ([#692](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/692)) ([ea118ea](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/ea118ea11be16a1dbae214afe745b8b0094b1a22))
* **deps:** update plugin npm-publish to v3.5.1 ([#694](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/694)) ([217c437](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/217c437c5cc29aab8651af3b1ca345cd6c4f21a4))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.17 ([#685](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/685)) ([2fabf93](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/2fabf93c583058be5b53e2c4a8eaa1985ff0a719))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.18 ([#690](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/690)) ([fd09f00](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/fd09f005c658f703dd3905cff253ce92e3b6eb74))

### Documentation

* switch to Dokka v2 ([#693](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/693)) ([3810319](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3810319aa11b6ddac3e32a43cc2f2af3eb0923bc))

### Build and continuous integration

* add a `yarn.lock` actualizer ([3c8f71d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3c8f71d6ab20611269b0850eb19bfd967b9ffcd5))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.26 ([#686](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/686)) ([6a01104](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6a0110452ec4d31bb9ee7dc12cf5aad70d58ae73))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.27 ([#687](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/687)) ([26f7750](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/26f7750825f53303e27a22ab5eb86b21e3604de0))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.28 ([#688](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/688)) ([6f46780](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6f46780c3705f16bda86da5170129f72c7191a2a))
* temporarily disable `allWarningsAsErrors` on test compilation due to kotest/kotest[#4521](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/4521) ([4ae15e9](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/4ae15e9899f48c86329f319741d7d5ed11e6d8bb))
* work around kotest/kotest[#4647](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/4647) ([2d1cfcb](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/2d1cfcbfa21e2137ac0603fb3e7e8ad6c73a340f))

### Style improvements

* disable `ktlint_standard_class-signature` on kotlin tests as per [@paul-dingemans](https://github.com/paul-dingemans)' suggestion in pinterest/ktlint[#2902](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/2902) ([7bb33d5](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/7bb33d5a6e91a4075ed21f57a9b783fbf403c825))

## [0.2.3](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/compare/0.2.2...0.2.3) (2024-12-16)

### Dependency updates

* **deps:** update dependency gradle to v8.11 ([#635](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/635)) ([3e5435e](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3e5435e036b65a6de131eab787e6eb32974b4440))
* **deps:** update dependency gradle to v8.11.1 ([#650](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/650)) ([d221201](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d2212017ddb4ec4728112a8717a86f55788e2af4))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.115 ([#636](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/636)) ([61f1ce0](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/61f1ce03ef28a3add5541a633d526082f68ec069))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.116 ([#675](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/675)) ([a068c02](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/a068c02045c85b8c94bde852b79779a5b1904d82))
* **deps:** update node.js to 22.12 ([#667](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/667)) ([bd74e56](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/bd74e561feae83116cd5b395cb3797a6d47f90e9))
* **deps:** update plugin com.gradle.develocity to v3.18.2 ([#638](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/638)) ([8e4f559](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/8e4f559811bc73766d6fb1cb73d71cf06343ec40))
* **deps:** update plugin com.gradle.develocity to v3.19 ([#683](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/683)) ([64ddf07](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/64ddf07a984c176758f05e386c91f4160bcd8fa6))
* **deps:** update plugin kotlin-qa to v0.70.0 ([#643](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/643)) ([a5084db](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/a5084dbcc4f3315eb3101f7be2c5f2f4b61193dc))
* **deps:** update plugin kotlin-qa to v0.70.1 ([#644](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/644)) ([0ee8798](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/0ee87980f9fc4a76296bbadb4895d41477645cd4))
* **deps:** update plugin kotlin-qa to v0.70.2 ([#655](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/655)) ([439038c](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/439038c89342b81639595eeeb302a83029b84953))
* **deps:** update plugin kotlin-qa to v0.76.0 ([09d2547](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/09d25475475705c83410bb877d0b89c5a4d5a284))
* **deps:** update plugin multijvmtesting to v1.3.0 ([#634](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/634)) ([10883dd](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/10883dd56f71f12c1bc1458ac187c309f135fcfb))
* **deps:** update plugin multijvmtesting to v1.3.1 ([#645](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/645)) ([b5c56ca](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b5c56ca8bb0b6f04f11b6f534ce6b0708c5146e0))
* **deps:** update plugin multijvmtesting to v1.3.2 ([#652](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/652)) ([68893f3](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/68893f3bc3e8a6ae7cfd73f0f48c9b50679d3475))
* **deps:** update plugin multijvmtesting to v2 ([#668](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/668)) ([25d7c5f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/25d7c5ffd542af10c9a8356aa4126788929bd4bc))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.14 ([#647](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/647)) ([8bc7c9f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/8bc7c9f6bd4f2cd430e740a7b63a7eba882f6ae8))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.15 ([#653](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/653)) ([4277107](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/42771073436bcf45822e0848c8b008d1ba9322e2))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.16 ([#680](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/680)) ([5c09055](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5c0905541f8b17033f6e945386226eea194f2a2c))
* **deps:** update plugin org.gradle.toolchains.foojay-resolver-convention to v0.9.0 ([#665](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/665)) ([3ae5156](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3ae5156be565a606b013fc5df86b83ec36a0e9f8))
* **deps:** update plugin publishoncentral to v5.1.10 ([#646](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/646)) ([8bd95a3](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/8bd95a388665e9656f939c17fd6248414a4c8792))
* **deps:** update plugin publishoncentral to v5.1.11 ([#654](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/654)) ([e8e3a5b](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/e8e3a5b96f2698e3179307c5133baf06a6cef2f5))
* **deps:** update plugin publishoncentral to v5.1.9 ([c3c4840](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/c3c4840977e01488aca27bc3bd0e336537933e1b))
* **deps:** update plugin publishoncentral to v6 ([#666](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/666)) ([f3e589f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f3e589faf32b02f29068bbfb735e12d8c31ef6de))

### Documentation

* **deps:** update plugin dokka to v2 ([#684](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/684)) ([e48f5c1](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/e48f5c17e2b6073a4912988e9a8d31d0d7f042ba))

### Build and continuous integration

* add a forced cleanup job to keep OSSRH clean ([caff34f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/caff34fbe96edb20fe835f665c74e5a57c786989))
* add CODECOV_TOKEN ([426c3c7](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/426c3c78990c91898ff8cbf7b715b33ed63e38d2))
* add gradle wrapper's `distributionSha256Sum` ([3c38378](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3c383786c104c4d1ced9e5dacfc226efff5ca251))
* cleanup ([1e677d5](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/1e677d55905838519b7410c3702c011f4bbf9458))
* deploy only on macos and in non-pr context ([c23329a](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/c23329a20c21266f6324230cd1fed59b38b59bdd))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.13 ([#637](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/637)) ([b7e7deb](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b7e7deb54063f9ce183c6c17d916032a6c2231be))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.14 ([#639](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/639)) ([8ac5d14](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/8ac5d1478c4831ac49dcbb9808e400611f1e4cb2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.15 ([#640](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/640)) ([01fe97d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/01fe97d3a2d757a4ae980d370c6f05403c7341bd))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.16 ([#641](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/641)) ([321ee29](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/321ee29ddbebefe0b42769b5bad9fb056b839cae))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.17 ([#642](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/642)) ([dc0ca52](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/dc0ca527c2b32a57e80dad6b13ba522b4bc04aa9))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.18 ([#648](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/648)) ([b6933ed](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b6933ed665b46e36563cc821ee938789312491d3))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.21 ([#649](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/649)) ([f879807](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f879807a226ba5176044989e1df7d52e668604eb))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.22 ([#651](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/651)) ([8265c5c](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/8265c5c5856c6ee3c7230a7b8d36c3e78b89d7f2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.23 ([#656](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/656)) ([bd7e09c](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/bd7e09c06aeddb6b715b79908657a5b043bab8c5))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.24 ([#669](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/669)) ([d167648](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d1676484332eb12d146a723aa36b4e2ff84f839f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.25 ([#672](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/672)) ([99576d4](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/99576d44d287dabe15345d59c5dd105a80408629))
* disable gradle chaching ([#681](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/681)) ([b0c712e](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b0c712eff84d61872f67f9de5f97dbc6690b131b))
* do not retry to release in case of failure ([1f5f639](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/1f5f6394ea0aa89f73fa6acb5d26911b3a2aee2f))
* drop unreleased staging repos on OSSRH ([#657](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/657)) ([a6cc19f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/a6cc19f028cc5b48df49e301c6679fa36af7162c))
* enable all publication targets since it will be performed by a macOS runner ([d6e043d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d6e043d8c4d68e3e01b6c8e6b5d060d62a9f642b))
* fix precompute version ([bc4d43a](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/bc4d43a96e64b2dcd21b68f1bdbc163bea948e96))
* fix problem with staging repository passing ([d4e9cfb](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d4e9cfb5dfea8a29751b9bfe9a143861be118477))
* fix release step ([2c84248](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/2c842483eef02bb47e39d10a2f2fed5a7659a32d))
* full node version ([9f504a9](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/9f504a931bfc22d9676a260aaaa40fad04b72f53))
* remove android target and enable multiJvmTest ([d474a5a](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d474a5a792fd49c91303bacaa87960dcdd647660))
* repo checkout ([3aed676](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3aed6763feece8c0a00094d3ab50341590f69fe5))
* revamp template excluding android target for KMP library and enable multiJvmTest plugin ([#633](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/633)) ([671cee0](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/671cee0e70f3317616242c17fb4a95531de0b475))
* sensible task as last operation ([b4d5685](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b4d56853767fb28370918d98a95303a155533ff1))
* simplify workflow for build, test and publish KMP library ([636694e](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/636694e1a9f7d177d9e897a1b91581433b65c5ff))
* use gradle caches ([1445e95](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/1445e95c999184e95e62e9cce0aa46d4232add1a))

### Style improvements

* remove commented code ([b8d5dca](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b8d5dca68d9b865efa714dc3494bdbb3eb6d3e25))

## [0.2.2](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/compare/0.2.1...0.2.2) (2024-11-05)

### Dependency updates

* **core-deps:** update kotlin monorepo to v2.0.21 ([b97ce53](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b97ce539d5fcc5a35eb82573d83c68745e7999a2))
* **core-deps:** update kotlin to v2.0.21 and kotest to v6 ([aa6e715](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/aa6e7151419722a64d06feaeded60d28ca43d4a3))
* **deps:** update android.plugins to v8.6.0 ([05b805f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/05b805f3587e781bfdfe1ddc61817703e5d305bc))
* **deps:** update android.plugins to v8.6.1 ([5a93af4](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5a93af40a418f8ba655bc084f05563508e83c2ae))
* **deps:** update android.plugins to v8.7.0 ([e9aa49f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/e9aa49fd9a9ec9769171f23940d1a2f992460533))
* **deps:** update android.plugins to v8.7.1 ([9944050](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/994405090193639ab3209f2e7d68b2ee3f437987))
* **deps:** update android.plugins to v8.7.2 ([9161950](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/91619503f507c96a15d556d309a1dd05cbc73060))
* **deps:** update dependency com.android.library to v8.5.2 ([6b5e083](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6b5e083b2bb5c1810997cfa5b72aeddbc0d7aab4))
* **deps:** update dependency gradle to v8.10 ([f6a43bb](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f6a43bb1070ce9a79e39ac90798c858f384d5a80))
* **deps:** update dependency gradle to v8.10.2 ([bd7848d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/bd7848dcdf9155be445bb908b5c549ed8c9fdfe7))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.100 ([fc5c86a](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/fc5c86a3a6db9e8167e2c1b51524201b527951f6))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.101 ([5e24e8b](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5e24e8bf7478c1c3406e03058289142a88bb06c8))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.102 ([280f3da](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/280f3da3a1a8cf18c95f0f714b4c3ec101192d74))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.103 ([44ee0e4](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/44ee0e4e509fad02ea870b77d17b1cd8f812766a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.104 ([73821ab](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/73821ab4b51e59e7f539d92f2dd3c05f5a15c2fa))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.105 ([f5e3a96](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f5e3a9624b3506fb070ca98bcbdf03c10c4eb3b9))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.106 ([0a2821b](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/0a2821bac390189b24377e1b98485b1c5500fdfa))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.107 ([42808fb](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/42808fb2ecba93730fe767079c3a473b7691b408))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.108 ([78556ab](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/78556ab5eb61515a18777fa6a0046ebe35c541df))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.109 ([4814651](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/4814651ea658f605efd6c2d43a7c918ef66625b3))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.110 ([85441da](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/85441dac92ce469314f4b2f0b5ce292c222e9048))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.111 ([01e2f73](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/01e2f7355878a5d1950064f402163cf2224002b0))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.112 ([0b29717](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/0b2971743aaaa3090e5830571bff78203ff2211f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.113 ([7d6a6f8](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/7d6a6f840b8a61a018efd026a40cf4dc4f13e4f3))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.114 ([6fea09d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6fea09d56b5f384bdbbf7287e2b3dbad60ce3476))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.96 ([7c0bd08](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/7c0bd084290ae4113b149f31ca52a953c2acd7e0))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.97 ([372e21c](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/372e21c5f976fd48709350226f755a26328a70bd))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.98 ([dc61a36](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/dc61a3631b5b7217dbdd77372c92e0e028d76518))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.99 ([b53f502](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b53f5020cdb8772ef6edf6331a8b14dc1e9541cb))
* **deps:** update node.js to 20.17 ([6dbadec](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6dbadec1c5a31364f467dc4ccae807086d34673c))
* **deps:** update node.js to 20.18 ([5e71475](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5e714756a9efb3d49a528bdea4f7469b948222f6))
* **deps:** update node.js to v22 ([233e4db](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/233e4db7d546228c3c3f0a77b327994ba48eb230))
* **deps:** update plugin com.gradle.develocity to v3.18 ([3299b7d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3299b7d6d99f7e5bd423b01ee00990f8fae5166b))
* **deps:** update plugin com.gradle.develocity to v3.18.1 ([dbd47ff](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/dbd47ffee590b047556d2dcb00406022e4e2188c))
* **deps:** update plugin kotlin-qa to v0.65.2 ([246d4a6](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/246d4a672925faac56a94bfddfb958faff66ef47))
* **deps:** update plugin kotlin-qa to v0.69.0 ([03ae6a4](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/03ae6a4e668e1eb1a4cf89c732994bf32e3c9a4c))
* **deps:** update plugin multijvmtesting to v1.2.4 ([04cf4ad](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/04cf4ad312774e6ea10b50a4725547c5fcc49e77))
* **deps:** update plugin multijvmtesting to v1.2.5 ([e59c130](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/e59c13012336b2f46d0242ffc7d667f20327c63f))
* **deps:** update plugin multijvmtesting to v1.2.6 ([1564f61](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/1564f61ecc49a345c20b3618be7700077d1cdd1b))
* **deps:** update plugin multijvmtesting to v1.2.7 ([16c033d](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/16c033ddc1af45a5dbbd751d12e18c91a88e207b))
* **deps:** update plugin multijvmtesting to v1.2.8 ([5154aaa](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5154aaa343d22226942007e101a345b9f3189c14))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.10 ([51b6534](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/51b6534a8dec331f81eea2a0b13f1d0b65c85bdf))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.12 ([5a9c0de](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5a9c0de5fa721fbfd8cd1c2d91be88c170e986e3))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.13 ([92b3cbf](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/92b3cbffcef4a2ae869126d56b6cbc513fb0535a))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.9 ([b453c80](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/b453c80c565cb66afaffee986be78bdc841f3547))
* **deps:** update plugin publishoncentral to v5.1.5 ([3b5382f](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/3b5382f769ef76225a070a894a576b121156b174))
* **deps:** update plugin publishoncentral to v5.1.6 ([61b413c](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/61b413c8494b7d64da1f12c3a7e35700e901f9f8))

### Build and continuous integration

* **deps:** update actions/checkout action to v4.2.0 ([89d2799](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/89d2799bdf9120b4991f5bd9ebb657336b43e6ed))
* **deps:** update actions/checkout action to v4.2.1 ([5afbc8a](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5afbc8acf9a39b64c75cf6c3ba7172957e362fd4))
* **deps:** update actions/checkout action to v4.2.2 ([7afd2fe](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/7afd2fed7985636a0c63c0e916033d18f86f7bf2))
* **deps:** update actions/setup-node action to v4.0.4 ([38d3707](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/38d37071c814c10023699896010923c89c8de7e0))
* **deps:** update actions/setup-node action to v4.1.0 ([cc12ab6](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/cc12ab6745d308d183bf63c145a7be251f4c8d6f))
* **deps:** update danysk/action-checkout action to v0.2.20 ([bbc5f72](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/bbc5f72ed81dfed6ff799d40a63bc4f72770fc42))
* **deps:** update danysk/action-checkout action to v0.2.21 ([da5e940](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/da5e9408bcffe4cf53c9d0e61c23c950892b296a))
* **deps:** update danysk/action-checkout action to v0.2.22 ([5e80179](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5e80179b11993ca667d9c29200f3b294482c167c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.10 ([520a7f0](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/520a7f0958c789de30765bb6e09bbb8a1da52b48))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.11 ([233f2ea](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/233f2ea08b6454437385fcff4955bb972a395822))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.12 ([d0c8824](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d0c88249cdee4a147a595ddcbc948e3897be435d))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.3 ([f118d72](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/f118d723734c08723043f927ddee81c7b8ee906b))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.4 ([842ecf3](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/842ecf358267d43038fa82fa5026670037d8d830))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.5 ([01f12e1](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/01f12e13a65db93fb8f531766f238fa5249eba8c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.6 ([5d2d362](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/5d2d362c7ef74ca6592ccef7a63d24d778c9ee0d))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.7 ([2fac551](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/2fac5511041f5788c7d621d71bce9dbf1d37d9fe))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.8 ([d9fd0e6](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d9fd0e63f6f3a73e3082d037dbb2abad89ff94f3))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.9 ([9dac6ef](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/9dac6ef53f27e06bb729122f1a19356c363e06ea))
* **deps:** update dependency ubuntu github actions runner to v24 ([c0e8a09](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/c0e8a0970b229180895bfff2538f0f6a1ec91de5))
* **deps:** update nicolasfara/precompute-semantic-release-version-action action to v2.0.2 ([0c06bdd](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/0c06bddf3b39587986d3135fee43f8aaa23d7c52))
* drop Android-specific support ([d4841c3](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/d4841c3b1a2c23b137602e92a57300f4b7f4d94e))
* enable compiler options for all the enabled targets ([#538](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/538)) ([6a84288](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/6a84288d60c9c0e7b24fdde5b82a3e1b5ea5b044))
* refactor concurrency groups to keep renovate from merging bad PRs ([#606](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/issues/606)) ([e697241](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/e697241c8dfddad9276dc12de40ec45fd6543f7d))
* **renovate:**  use `with` when importing the configuration instead of `assert` ([c27ca2b](https://github.com/DanySK/template-for-kotlin-multiplatform-projects/commit/c27ca2b723040f6160a4fe27d440fdffa4486dd2))

## [0.2.1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.2.0...0.2.1) (2024-08-06)

### Dependency updates

* **core-deps:** update kotlin monorepo to v2.0.10 ([898fc7e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/898fc7e48a28e720778acb4fcf470ec42babcd05))
* **deps:** update android.plugins to v8.4.1 ([65e262f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/65e262fcf2010f401f82bceb4aa00e096b5ff3a3))
* **deps:** update android.plugins to v8.4.2 ([2ce2d44](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2ce2d44db3c563c790aa9bcd872c6008f2221b21))
* **deps:** update android.plugins to v8.5.0 ([36b9a22](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/36b9a22bc1268074911b79633d918d292b6736d3))
* **deps:** update android.plugins to v8.5.1 ([6185314](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/61853145f16e2a85cd3b9bf70f67e1067f88925e))
* **deps:** update dependency gradle to v8.9 ([358a46b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/358a46b8a5c90298d1c029d4b7545feeb5be3fab))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.87 ([b30faf2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b30faf267c962483eba53c11775b098e038b537c))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.91 ([1d099a9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1d099a95a5dfdc2e301aa71f5d2692afaa2ba33b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.92 ([be7ffb4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/be7ffb4d1ce0f2a5aa42cdb14317b4e5d92129b5))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.93 ([3b72f06](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3b72f06c0b5f7a003c68aa367bb7026981c45278))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.94 ([ce512c6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ce512c61af25edf69cf078b08075909c82955e99))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.95 ([d4cc245](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d4cc2457860ab247f13d713894da505f84d4bf58))
* **deps:** update kotest to v5.9.1 ([14ba183](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/14ba1831fdfa6a00861f1cbc72ba777c63356a1f))
* **deps:** update node.js to 20.15 ([0c5f4fe](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0c5f4fe36853e271ed1f303b04c28e23ee0f5b9b))
* **deps:** update node.js to 20.16 ([ee88de1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ee88de19b0ab41cc21b531ac774d9fb064738c0c))
* **deps:** update plugin com.gradle.develocity to v3.17.5 ([97ec34c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/97ec34c0bf54efaa95d925c64c34a68cfbbccd53))
* **deps:** update plugin com.gradle.develocity to v3.17.6 ([ac84c97](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ac84c976c0136adb244d44ee1e204180376f38e8))
* **deps:** update plugin kotlin-qa to v0.62.3 ([44a8afa](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/44a8afa19fb8c7ab76dc12a68b4e6cf4658b456a))
* **deps:** update plugin kotlin-qa to v0.62.4 ([aadf3dc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/aadf3dcd400a322c45b03c9cfce80efd8a388414))
* **deps:** update plugin kotlin-qa to v0.63.0 ([4287a30](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4287a306cdb473ed85fe5b210f7903796e42aeed))
* **deps:** update plugin kotlin-qa to v0.64.0 ([e3124e4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3124e4619b942fc277aa02e779977d2fbf1b1b6))
* **deps:** update plugin kotlin-qa to v0.64.1 ([ea2f182](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ea2f182dae7ab4db0acf710bc167c98dee00f4f2))
* **deps:** update plugin kotlin-qa to v0.64.2 ([d9c77b2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9c77b2e174530921e53f1161aa4d439e507f79d))
* **deps:** update plugin kotlin-qa to v0.64.3 ([e62f865](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e62f86575848345e3a3e6589954dfdf3a4a70c97))
* **deps:** update plugin kotlin-qa to v0.65.0 ([89a7cd2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/89a7cd294d478c5eac905d06be40b978c32482eb))
* **deps:** update plugin kotlin-qa to v0.65.1 ([e3ad229](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3ad229d727a3227fdb1695625ddec45fb08f529))
* **deps:** update plugin multijvmtesting to v1 ([350f502](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/350f502ed16c83217d374f1a56ff1af5a836c73d))
* **deps:** update plugin multijvmtesting to v1.1.1 ([b053ac0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b053ac0aa7c470a92173efa861535c3453851793))
* **deps:** update plugin multijvmtesting to v1.2.0 ([4fcc321](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4fcc321bd933e951f572c68a22ebce9e7b58debd))
* **deps:** update plugin multijvmtesting to v1.2.2 ([d989566](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9895669edadd15208d300f264771eca9b67e420))
* **deps:** update plugin multijvmtesting to v1.2.3 ([420f7e8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/420f7e807ede0facb71c8459ecaf9544ca847929))
* **deps:** update plugin npm-publish to v3.4.3 ([0c04d87](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0c04d87425a59d27af68d9358cf670882c1f54e5))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.8 ([188132f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/188132f02422549a95e1e8f61c4a920026237470))
* **deps:** update plugin publishoncentral to v5.1.3 ([be9a7db](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/be9a7db9ab10e13d9a8a4156e80a3adc4e5d5f1d))
* **deps:** update plugin publishoncentral to v5.1.4 ([d143b24](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d143b24be0c77768f4ab471b1b3a76fd5418914b))
* **deps:** update plugin tasktree to v4 ([932501d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/932501d798a1460619bcb48637092f88d3e5d1d4))

### Build and continuous integration

* **deps:** update actions/checkout action to v4.1.7 ([c6fed00](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c6fed00e8796c8189042785bbe1bed395d76153b))
* **deps:** update actions/setup-node action to v4.0.3 ([7bfc367](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7bfc367c91f30d025cf5b20c2ac303d6e551cece))
* **deps:** update danysk/action-checkout action to v0.2.19 ([e7dc570](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e7dc570078cac631c6a3d9b2565bbcd997d09d05))
* **deps:** update danysk/build-check-deploy-gradle-action action to v1.2.13 ([d7ae149](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d7ae149db701d6fb3d484aff3e6e5575ce07aafa))
* **deps:** update danysk/build-check-deploy-gradle-action action to v1.2.16 ([b9e78f9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b9e78f9643d2b5e0491efd0037b7b6f515adec0c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2 ([0982527](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/09825277df822f02a080a409da3c68ca89bf2434))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.19 ([a5a0d12](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a5a0d12f12db3aab3d8df6c727ffb20d07064218))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.20 ([25e3995](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/25e3995b50c6bee1c2faa3e07b9740c3fc02e665))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.21 ([e8b4a87](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e8b4a876b597a031e590cd9411ba44f0f2619248))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.22 ([5640a26](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5640a262706167a325cc2e86b261b8b90564f61c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3 ([284f231](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/284f231737c698227321c86715e44a3ad8e44be8))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3 ([06c0a1f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/06c0a1f4e6b961b1c6c1f6c0a0edb08b0a222e05))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3 ([2b28b94](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2b28b94608a33e236913e0abe0254b3cf720e0ba))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.1.0 ([f86c7c8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f86c7c8010c886d55904205fce2b0f8a834f3646))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.3.0 ([76ae898](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/76ae898ac662025cfbf848184f44f7c15488960f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.4.0 ([ecf10bb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ecf10bbf92787bc66f236a3fd121d38e10505ac2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.0 ([5f5deae](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5f5deae81a461ad088fe8e32ea7c3b019e562944))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.1 ([3f7b944](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3f7b94482633d942de608e92de04807f9e0900ed))
* **deps:** update danysk/build-check-deploy-gradle-action action to v3.5.2 ([2a09605](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2a096052722c21e791d1519dbf30f30795b1120e))
* **deps:** update nicolasfara/precompute-semantic-release-version-action action to v2 ([3ec9ebe](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3ec9ebebce870afe6c68483cf795fecd5b251a59))
* explicitly read the username from the repository secrets ([d0e42cb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d0e42cbb22f8245677e22875e7a4366a4eb3d043))
* install the version of node from the package.json ([d9acdda](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9acdda492ba9ac44abb88b3570bcc7027d3559e))
* **release:** switch to a ECMA6-compliant semantic release configuration ([8dd442f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8dd442f12a24b730f544bd9b08c0bcd221c46f0f))

## [0.2.0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.26...0.2.0) (2024-06-08)


### Features

* enable android target and adapt the build to kotlin 2 ([7c3b359](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7c3b35952534b276a489dc32f4e6e35ebf48a7ac))


### Dependency updates

* **deps:** update dependency gradle to v8.8 ([c377365](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c37736559ddd3c94f44054207f9955eb6ac59685))
* **deps:** update node.js to 20.14 ([b4eefcc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b4eefccf1a2ff638718cdb560ff737262c82c5cb))
* **deps:** update plugin gitsemver to v3.1.7 ([e1533e0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e1533e0a01f0c7c2e5bd5bc503b08bc2fe365542))
* **deps:** update plugin kotlin-qa to v0.62.1 ([789f346](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/789f3468e92d2f3958ba93a3d844eba935b357b3))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.6 ([55130d6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/55130d614488ef9d352e8783264df74dc96e4862))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.7 ([487f9cb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/487f9cbbebb64b7d30e948c339f56663061571ec))
* **deps:** update plugin publishoncentral to v5.1.2 ([175eb2e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/175eb2ec91a56601dd56f9c73ee590a923bc27e4))


### Build and continuous integration

* enable binary executable for native and JS ([df4b14c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/df4b14cc7d0c9c5086cbdf8dad6f0c41be00b2af))
* migrate to develocity plugin ([d8b977c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d8b977cb721c9eee247ffb68fc9c8ae1097e2092))
* reduce boilerplate ([e31f95d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e31f95dee2926d69080c12b1e12e160bbc1eef2f))


### General maintenance

* exclude .kotlin folder ([a8539e9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a8539e9d04071265a6aa8a1e26e76caecd007c2f))
* solve deprecation warnings and opt-in for expect/actual ([418af5c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/418af5cd374e6a0c0cb5cb2b6aebc22f88c07a56))

## [0.1.26](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.25...0.1.26) (2024-05-21)


### Dependency updates

* **core-deps:** update kotlin monorepo to v2 ([61235f7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/61235f776bbbf4daf3cfa57e862c0b55d2ace0f6))
* **deps:** update kotest to v5.9.0 ([3e725e6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3e725e66eb19bca3e13d74262bc693ea36b7c796))
* **deps:** update node.js to 20.13 ([e61a8ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e61a8ff0608c71d3341c67e3c8613602c37a00a8))
* **deps:** update plugin com.gradle.enterprise to v3.17.3 ([38dfe1c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/38dfe1c882bb7f65ef41abe6b3b69e7a74355474))
* **deps:** update plugin com.gradle.enterprise to v3.17.4 ([dc8564d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/dc8564d18ebfabba08b136fe2ec289cd76a77308))
* **deps:** update plugin gitsemver to v3.1.5 ([b6a05b5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b6a05b59617dbdab7bfef77456fdee5962faa877))
* **deps:** update plugin gitsemver to v3.1.6 ([4ce755b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4ce755b3bef1c4f7b5b0d1134b94d0bd25427a2c))
* **deps:** update plugin kotlin-qa to v0.61.1 ([2b61fe2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2b61fe27c02eeba028d95ef2a003f680307f7c7e))
* **deps:** update plugin kotlin-qa to v0.62.0 ([fbe94ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fbe94ff530e0e493f07210bfe968e6836ff58a63))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.5 ([4686bd7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4686bd7352856b4296f37a4c89c85577b7f3b505))
* **deps:** update plugin publishoncentral to v5.1.1 ([6a39369](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6a39369636b77bb8b7affebed70a8acb3fec9822))


### Build and continuous integration

* **deps:** update actions/checkout action to v4.1.5 ([fb9f4df](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fb9f4dfef278548d175d5d7fe57ecb0c4c69b3b9))
* **deps:** update actions/checkout action to v4.1.6 ([ac8eb80](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ac8eb80c22e82ec0caa33efdff05688d19e9c6f2))
* **deps:** update danysk/action-checkout action to v0.2.17 ([e6080a8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e6080a88c766b8d40f39095cb87782bc18aa7b8d))
* **deps:** update danysk/action-checkout action to v0.2.18 ([2ec20ba](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2ec20ba9bcf26984b2b7dfe32727424816905d4c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.19 ([e0f71b8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e0f71b8e02aa1a0a6575fc4fd23ebb354dbc76eb))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.20 ([9dd89cf](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9dd89cf1ccb43b27d61d6f3a05411c776e75550d))

## [0.1.25](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.24...0.1.25) (2024-05-07)


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.24 ([fddf1c4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fddf1c4b04cd639422d007d9def973f53b26d9f3))
* **deps:** update dependency gradle to v8.7 ([34a1999](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/34a1999449db4381c56909fc9acb8be3aec1c753))
* **deps:** update dependency io.kotest.multiplatform to v5.8.1 ([34eec6d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/34eec6da824e41405cb19f48e2dd71decc53754b))
* **deps:** update node.js to 20.12 ([2ab9e8b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2ab9e8b9ed3b3f9597bed6a6b2206df7e5fc7fee))
* **deps:** update plugin com.gradle.enterprise to v3.17 ([e743889](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e743889392855e9c71efb916ff3b4b3d00179aff))
* **deps:** update plugin com.gradle.enterprise to v3.17.1 ([709fc83](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/709fc832729860a5809d1951e4f5eadce14f01e6))
* **deps:** update plugin com.gradle.enterprise to v3.17.2 ([565513d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/565513d4ec6cbcd64da3f02e45f34fe2a2619d2c))
* **deps:** update plugin gitsemver to v3.1.3 ([95c60fc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/95c60fc782463494c481ebf9119c1ab7676b007d))
* **deps:** update plugin gitsemver to v3.1.4 ([239dfba](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/239dfba5105b0cef5f75d33cae297313a8187f3e))
* **deps:** update plugin kotlin-qa to v0.60.3 ([a1b2453](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a1b24539cbc285b1762fe32aa67c24b8d46f52d8))
* **deps:** update plugin kotlin-qa to v0.60.4 ([487872d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/487872d9dcc072859667fa08b9be483889baff2a))
* **deps:** update plugin kotlin-qa to v0.61.0 ([cc8c64f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cc8c64fb87790ce17487d8ccf0018a484445f801))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.3 ([066541b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/066541b0ff9f35338dcca253852048eee863a67e))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.4 ([d0d8c25](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d0d8c2541e25501df49128430eb34642effe84be))
* **deps:** update plugin publishoncentral to v5.0.25 ([1cf08ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1cf08ffa69e1518d75b97d85908dcfc14c63bb92))
* **deps:** update plugin publishoncentral to v5.0.26 ([0f6bd1e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0f6bd1ee52355dda0b0478c3997ee458418a84ab))
* **deps:** update plugin publishoncentral to v5.1.0 ([80aa14e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/80aa14ec30adaf00dc8303bb6d62bf862b0fa2d9))
* **deps:** update plugin tasktree to v3 ([538fccd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/538fccde739062d21afe9193bb14723f668ad3aa))


### Build and continuous integration

* **deps:** update actions/checkout action to v4.1.3 ([153ffdc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/153ffdc5d362bb72e0d946e55ceb829eb1fd0781))
* **deps:** update actions/checkout action to v4.1.4 ([d4ca638](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d4ca6389dd5b882a57674ec28c9e6b88984d0631))
* **deps:** update danysk/action-checkout action to v0.2.15 ([cd3523d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cd3523da9d9c5872c4379c02e096f2217007bcfc))
* **deps:** update danysk/action-checkout action to v0.2.16 ([7955b45](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7955b457961a4e977aee5ae629b2ce7db1e86e2c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.10 ([616a2d2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/616a2d2a147c1e4abe3dc540a6108b728400129d))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.11 ([f36143e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f36143e1804d7b1c5256c1aab132b4e795b414ec))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.12 ([8e720a3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8e720a3271873da4e82ab8f616e404c3d199398a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.13 ([690d4ea](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/690d4eab32194f2393dd5ce578776f542064ef1a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.14 ([18a1e68](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/18a1e685b3a4a58005b099db2d7780bc6198628e))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.15 ([b79130e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b79130eb25f6240746041255fd821c7d5e6a831c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.16 ([7f07744](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7f077442caef52349f56e857a516046dd3ba7ae7))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.17 ([ea189cb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ea189cb123f3295b2181a9c233843e598d6bd9fa))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.18 ([d1bca67](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d1bca67c5c73e8c48e61b1f474436338a86cc188))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.7 ([08730ba](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/08730ba48af8813f6b3ac8907867559aae3ac6ef))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.8 ([1e00d29](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1e00d29cf30680bf56a2e699ca8eaae71997881d))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.9 ([14cd9b0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/14cd9b081ad074fa439e1617f52d1a8727dcdc43))
* **deps:** update dependency macos github actions runner to v13 ([510afd5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/510afd56aeb90f7628f24b3552540630f56263fa))
* **deps:** update dependency macos github actions runner to v14 ([da369c0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/da369c0828b0bb6c924e4e2cf6204ee7a073a68a))

## [0.1.24](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.23...0.1.24) (2024-03-07)


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.23 ([823692f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/823692f30887680b8c672a7cb79be2c2c1c6b814))

## [0.1.23](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.22...0.1.23) (2024-03-04)


### Dependency updates

* **deps:** update dependency gradle to v8.6 ([31a689e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/31a689ecb19385a142578c87b984e8a73eacbe6a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.85 ([107fe8a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/107fe8abbd457f2f64d2cca2a349dd286d0c4bff))
* **deps:** update node.js to 20.11 ([8ff2774](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8ff2774fb02b9ded7b5c336d4ec796fe8195fd8c))
* **deps:** update plugin com.gradle.enterprise to v3.16.2 ([cd3e994](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cd3e994053afbd626a137141607c5bdc7ed7d8d3))
* **deps:** update plugin gitsemver to v2.0.5 ([c7a794b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c7a794be1622a20314c2dabb4d2ef8aa6a5f1eec))
* **deps:** update plugin gitsemver to v3 ([a6dc2c5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a6dc2c551daabf3b0a1b10456597809051f5c72b))
* **deps:** update plugin gitsemver to v3.1.0 ([726ff63](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/726ff632077f4f15a186ddc3f3ff803b41591892))
* **deps:** update plugin gitsemver to v3.1.1 ([e3f196d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3f196d97dd0db5b90e33d74e5be0f449a9a37f4))
* **deps:** update plugin gitsemver to v3.1.2 ([6956e14](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6956e14594aa115a93d218915e79d1bf6a9dfe58))
* **deps:** update plugin kotlin-qa to v0.57.1 ([99d5516](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/99d55167cc035d07d3580b9cf30fdf5c889999fc))
* **deps:** update plugin kotlin-qa to v0.58.0 ([efa273f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/efa273fdb1cf5ccff08ffb558acabb9f47112dc3))
* **deps:** update plugin kotlin-qa to v0.59.0 ([86b50dc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/86b50dcbc98bf08a4d1f452dad88afdbd9aa9ea0))
* **deps:** update plugin kotlin-qa to v0.59.1 ([deee96c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/deee96cbe0ab4348210315c6eaa74aadf1256880))
* **deps:** update plugin kotlin-qa to v0.60.1 ([f369c6b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f369c6b7c3d832fe4b9aef203259490500d5cf9b))
* **deps:** update plugin kotlin-qa to v0.60.2 ([80cfead](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/80cfeadc2a1e256e6d27ebc5d055a4caf8e54885))
* **deps:** update plugin multijvmtesting to v0.5.8 ([7a8ea36](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7a8ea360e49518c6b9b6382037c2534431245498))
* **deps:** update plugin npm-publish to v3.4.2 ([bd55c65](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bd55c659c26d0e90c55167bf5f98c173f3ed1489))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.17 ([a39e322](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a39e322e928cd0a21d11dee00d8ba9a227a9a750))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.18 ([6907d3e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6907d3e9910b5b29b53854d0191c68cc46d2d68c))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2 ([790ea6b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/790ea6b575ff26fd42b3c19fecd24b357fd8f951))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.1 ([9daed06](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9daed06c3bf4f57d1dd28058bb23df894059789d))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v2.0.2 ([4bc2427](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4bc24277c95c0b1c6e105381a777c1ce5a6025ff))
* **deps:** update plugin org.gradle.toolchains.foojay-resolver-convention to v0.8.0 ([824f0c2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/824f0c2873ce2463052b908f606b72c898e72c45))
* **deps:** update plugin publishoncentral to v5.0.22 ([f4f8766](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f4f87660d8e900545cab8b59b17d6b7d00361b38))
* **deps:** update plugin publishoncentral to v5.0.23 ([3c18ef2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3c18ef2295b43f5323975f979cbc102679f7cce8))
* **deps:** update plugin publishoncentral to v5.0.24 ([0b72440](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0b724403642aaff618832e87409c2e483fb14d06))


### Documentation

* **deps:** update plugin dokka to v1.9.20 ([342570c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/342570cf517b00e22f92627da8c288d142459ebb))


### Build and continuous integration

* **deps:** update actions/setup-node action to v4.0.2 ([d7b2308](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d7b2308aec4890543d0562e5cf4548a2e2ed006f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.13 ([93757dc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/93757dcba989f4f5b63bdc0454475d8dead8fce2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.14 ([52596c5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/52596c56e8e64c3161cecd0aea64c3cc33217994))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.15 ([80e084a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/80e084a2890bd9a46ca26c7625d61a56e69ba450))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.16 ([ee2a8d5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ee2a8d549833b0f0711dd3864bce0024833dc4e8))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.17 ([262d951](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/262d951abf258314ae1a1ed1bcbe70e11a5b599c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.18 ([568e2b6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/568e2b632cb79434488a715837ee72e81f4a5741))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.19 ([60ce851](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/60ce85141c1a65f50625b1a3c1b9f71fb409b0df))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.20 ([ed5ad1c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ed5ad1ce10a662b1e10056130288be961523718f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.0 ([d033b0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d033b0fdd55328d80c65190d94367a33b87dfc28))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.1 ([53a0920](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/53a092068a508368274b2e6af08f62e74eac77e4))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.2 ([796d5c1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/796d5c18119d3bcf3a3c75d71be075826f8bccf4))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.3 ([fbb790f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fbb790f05ec9714fd604dac5da3ba7ea8457c5ad))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.4 ([baef0d9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/baef0d909839a99ae8a6fbd21c4f0e3959188920))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.5 ([f5b635c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f5b635cbfa8e9aa1b312c5c053798e3673534732))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.4.6 ([9b94bb2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9b94bb2973044e6a611dc6496bb4029afe6cf4fa))

## [0.1.22](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.21...0.1.22) (2023-12-21)


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.22 ([d4075ac](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d4075acc09dbdc02fcecd3f0ae7c4f6efb59a6e9))
* **deps:** update dependency gradle to v8.5 ([df64164](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/df6416428739e77d77c16fada574ca09d58c060b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.78 ([e80f8e2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e80f8e2bfc89523a5739f13eb4d62c363f0eec61))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.79 ([afebc4c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/afebc4cdd3ec20b45f42cbe41e8b21b498496f0d))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.80 ([072b699](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/072b699ff09a16ecdefa67da5caa2c4fdfc138d8))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.81 ([be8af86](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/be8af8602f65723ee72ac8ac524aea7d4a471c25))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.82 ([0f354a0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0f354a083b35ae325f25f708d250110b3c5253fe))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.83 ([7b0d250](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7b0d25072ba97d4ea5c20e6be8c6d1aee288f87b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.84 ([03a78f2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/03a78f22c19a36a1993a4987b9e6ba2036243be8))
* **deps:** update plugin com.gradle.enterprise to v3.16 ([bde43e2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bde43e20a032d87c8c852c483daf9fce97d3d531))
* **deps:** update plugin com.gradle.enterprise to v3.16.1 ([c494674](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c49467411a18bba455bfea0a8b9378c7e939d952))
* **deps:** update plugin gitsemver to v2.0.3 ([51635db](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/51635dbd30ff9ad0377a12d1c9b71f73a12d5c0d))
* **deps:** update plugin gitsemver to v2.0.4 ([bd78bdd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bd78bddb98740f9904fc96066c4d6668e7196d3d))
* **deps:** update plugin kotlin-qa to v0.54.1 ([fdd93d1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fdd93d1aae865cdcd6e74f8558d660702e28e87d))
* **deps:** update plugin kotlin-qa to v0.55.1 ([c5359b3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c5359b35baca8f62fdb8048233d31d71cd5f2db1))
* **deps:** update plugin kotlin-qa to v0.55.2 ([32a3e30](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/32a3e300401aa4b38973ee50ba7e7dfb427057c6))
* **deps:** update plugin kotlin-qa to v0.56.0 ([f9188b0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f9188b0c508d1769bc02306d4f2f1dba83f1b16a))
* **deps:** update plugin kotlin-qa to v0.57.0 ([bcad03e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bcad03e1b7d5313db816ada2f35b6f27fbcaa1bb))
* **deps:** update plugin multijvmtesting to v0.5.7 ([811d04a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/811d04a95a99a4bf5b268e0ee37040a199f8a78b))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.15 ([88ea3c4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/88ea3c47079597d658091b4035b4411df834d791))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.16 ([a471fe9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a471fe98dcd00791ca63654a14ca25c35d67d437))
* **deps:** update plugin publishoncentral to v5.0.20 ([b48b9af](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b48b9af4eef263f0e5e60a10daa9208c57b78498))


### Build and continuous integration

* **deps:** update actions/setup-node action to v4.0.1 ([02fa7f0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/02fa7f0791de72145c015fedff88f5d683b246b2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.12 ([41c202d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/41c202d0f27762e83d96a38f70976aee7e309f1e))

## [0.1.21](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.20...0.1.21) (2023-11-23)


### Dependency updates

* **core-deps:** update dependency org.jetbrains.kotlin.multiplatform to v1.9.21 ([33c4c5d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/33c4c5d3e0bbc92d897547b442d633287e61ab0f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.74 ([33adc4f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/33adc4ffb7d2fab847c6b6bbf8223d3f6ec04525))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.75 ([bb11047](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bb11047401d603e452cc332ddce0b2239034f55a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.76 ([bbf5bf5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bbf5bf5ef05eaa47fec4cd0ebe0e5d03b21b8fbb))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.77 ([e6cfd30](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e6cfd3073eb89d04371ccc3b7575740a4b935d14))
* **deps:** update node.js to 20.10 ([284815a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/284815ad8d7505d02e327cc01aacc544a4a31067))
* **deps:** update plugin gitsemver to v2.0.2 ([389d645](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/389d64587c034b6ec117751b3cf79d791710a5a8))
* **deps:** update plugin publishoncentral to v5.0.19 ([1fcf02e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1fcf02e8c82a1e8cd2613e53ffc0b5527f1e4a0a))

## [0.1.20](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.19...0.1.20) (2023-11-09)


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.20 (patch) ([#346](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/346)) ([c3bb7e9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c3bb7e94e1ec2120de15c4fb9b792b468f443cd4))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.71 ([cf7b6d0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cf7b6d0ffdf5ddfacbf8c1833f5f408aa8ea0210))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.72 ([55f9cea](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/55f9cea3fb56100edecb42825f184a84a749a970))
* **deps:** update plugin kotlin-qa to v0.54.0 ([8aba2d7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8aba2d7ede5e71ba7ef9f19eb58e4fb05910b628))


### Build and continuous integration

* stop the gradle daemon on windows before deploying to prevent `The process cannot access the file because it is being used by another process` ([#358](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/358)) ([b2c7e8d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b2c7e8de066830b78df341145f1167a00fecdfe7))

## [0.1.19](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.18...0.1.19) (2023-11-06)


### Dependency updates

* **deps:** update dependency io.kotest.multiplatform to v5.8.0 ([4f525db](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4f525db2749ae5e85a7f87a45c8c4c6dbdad912b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.69 ([ac28331](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ac28331219657f3dda8e6636e8e94bdab12e846f))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.70 ([873be72](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/873be72d106c72e36af3bd76b6b1ff008fec4f6f))
* **deps:** update node.js to 20.9 ([cd64b7b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cd64b7bd9eaac965599d1f344944821e0aee9caa))
* **deps:** update node.js to v20 ([a51e5ec](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a51e5ec23a8ea204712db8aaa46d1356574407af))
* **deps:** update plugin gitsemver to v1.1.11 ([9890d48](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9890d48766057d46844af206cecc8ad4a364955b))
* **deps:** update plugin gitsemver to v1.1.12 ([1771143](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1771143d0d1cd34b9eaf942f856850f9713cc9c2))
* **deps:** update plugin gitsemver to v1.1.14 ([cbcffe8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cbcffe8546b93045d45b9dad419e0d5e50458056))
* **deps:** update plugin gitsemver to v1.1.15 ([2674974](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/267497496a05151a8fb1745f872a4dffe1479b79))
* **deps:** update plugin gitsemver to v2 ([77e6854](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/77e68543ccec12f230e4607f3b3da8720e9b7246))
* **deps:** update plugin gitsemver to v2.0.1 ([b82335d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b82335de0cd7b5efc7db5450fc8f1d1bf56975d3))
* **deps:** update plugin multijvmtesting to v0.5.6 ([e2ad619](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e2ad619f82426bb12cf7aa4a9d2ec025c898b94b))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.11 ([5ab34cd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5ab34cd7e9e7b08795c8685d97d3363954eaee6e))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.13 ([d65f2e5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d65f2e5d362276bcf799305f6967951ecbf87bba))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.14 ([2ce55be](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2ce55be0ddd48c260bd1072706fd1fe9a40846a9))
* **deps:** update plugin publishoncentral to v5.0.16 ([5138041](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/51380410b8c40744f08e5c08a447480c7ee3a7df))
* **deps:** update plugin publishoncentral to v5.0.17 ([4f1201e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4f1201e4227f2d605fe3221661d54eee4119bed4))
* **deps:** update plugin publishoncentral to v5.0.18 ([65ddf67](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/65ddf6778b463172543db31152a1d69d233667eb))


### Documentation

* **deps:** update plugin kotlin-qa to v0.31.0 and update missing documentation ([#116](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/116)) ([29bc6f6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/29bc6f6a4c0a8b348a3ed42d357529d2d87250e9))


### Build and continuous integration

* **deps:** update actions/checkout action to v4.1.1 ([3c8a73f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3c8a73fa22a37d394fd86a34e5e7c5e3c120391b))
* **deps:** update actions/setup-node action to v4 ([715337a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/715337a240111a181fcd23d90d41756324a7c990))
* **deps:** update danysk/action-checkout action to v0.2.14 ([d70c7e7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d70c7e7c0e7e980a910fa66d4f653938f16c7f68))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.11 ([18e00a5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/18e00a5da47db60ce0eed707f2b4f2cf866b1793))
* disable the fail-fast on matrix jobs ([98f88e3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/98f88e31d397d05516f5723cc82d1bbcf783d2da))

## [0.1.18](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.17...0.1.18) (2023-10-16)


### Dependency updates

* **deps:** update dependency gradle to v8.4 ([af4eb9f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/af4eb9fb31744e35086b57bb25bed85d2778abca))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.49 ([aeaf53f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/aeaf53fa067f8007a7df77c96a08ab641e9e02b4))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.50 ([cf36ff1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cf36ff135a1eb9f992ea23a5724ebdcaa8b0ec5a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.51 ([29396ee](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/29396ee32aeb520dde093cb647285efd9606acc5))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.52 ([e5345bc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e5345bccf198b4113c59f3c29d171fcf1202a0fe))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.53 ([b1101bd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b1101bd9d216f8bc2aa938c865ea863ebe400a2d))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.54 ([a003dc0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a003dc0b84c63baa6ac5e4952ce57e04539b1092))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.55 ([a59d387](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a59d3871ec811f9b8d1c4b922c2a5be38d227ff9))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.56 ([4c320ef](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4c320ef011905a57cfd1465d410104204b4802f6))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.58 ([e52c9b3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e52c9b3b036e6ba259fbbb205ae595bb26cbaf84))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.59 ([c4370e3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c4370e32baa146c953038288c4067dd624afbbb4))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.60 ([44eb36d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/44eb36d954849c2e1bb2c0381e2c838edf924982))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.61 ([1237c97](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1237c97750cbe53417146d9375ee0a1ee5af0142))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.62 ([caec902](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/caec9021956f5495c6dfacdf907c9b2ef530ec46))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.63 ([df7375c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/df7375cfb0cb75922a15d060046b6dab3e907d79))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.64 ([d391cef](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d391cef0fea78ad662e9de23fd6669d02543cd89))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.65 ([013e180](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/013e1806e8e9743f4c953f328f20d3466dff11b5))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.66 ([d0575b4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d0575b4ea6e64c6f855b6f08ee623245201cc346))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.67 ([c64c705](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c64c705ae1eb667317fc45620da8a4e23d373378))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.68 ([aedfdcc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/aedfdcc5e812ad9ec5537d6a418e6692087f8008))
* **deps:** update kotest to v5.7.0 ([1ae8be7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1ae8be75eb88bc0c289f3c43dc9a178ebc3f21c1))
* **deps:** update kotest to v5.7.1 ([6d162a8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6d162a86642f215254a8f4395cc346b2358f28ba))
* **deps:** update kotest to v5.7.2 ([ddf2602](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ddf2602c80db75e9896dec69d88e1408fcfb3af1))
* **deps:** update node.js to 18.18 ([b42e321](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b42e3215308e113128008152721bcb60e1f43997))
* **deps:** update plugin com.gradle.enterprise to v3.15 ([c425e59](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c425e599afbaaf7aa9fc574cb030a1ec7c288cad))
* **deps:** update plugin com.gradle.enterprise to v3.15.1 ([096f014](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/096f01410cc4200ef6147fc55268dcbc58e15392))
* **deps:** update plugin multijvmtesting to v0.5.5 ([8a6bdc3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8a6bdc3ea1f4757d6720f7747a91606aa7bd9d41))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.10 ([52bb090](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/52bb090a9ef771e9fc8ddb5b93762e0b1d1e40a9))
* **deps:** update plugin publishoncentral to v5.0.13 ([f15cd89](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f15cd892e49dabf8faf6319a5d3da2299001eab7))
* **deps:** update plugin publishoncentral to v5.0.14 ([5672236](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5672236a524aeb2cbc81ca3d3a7e1b0415b20026))
* **deps:** update plugin publishoncentral to v5.0.15 ([ae4e37d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ae4e37d9bb69117fc45c633a96487806dc9a4206))


### Documentation

* **deps:** update plugin dokka to v1.9.10 ([f2b452f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f2b452fa4cdbf705a3965c543a414c63915ad0fd))


### Build and continuous integration

* **deps:** update actions/checkout action to v4 ([5e90c68](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5e90c68e6aa371c10132339da8e1a22d75739a5a))
* **deps:** update actions/checkout action to v4.1.0 ([c901140](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c901140b2c392070de41aca3fca1a27aebef8ebb))
* **deps:** update danysk/action-checkout action to v0.2.12 ([a869a52](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a869a52fa73614bf8f3455acba81b1018f9132b6))
* **deps:** update danysk/action-checkout action to v0.2.13 ([b2244bf](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b2244bf12e72b4055cb53b715b2a6fef6974c6c5))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.10 ([415ec0c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/415ec0c1ca54f4d8f0a8a8fcd9ea2fb2c2817fe3))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.9 ([3bb9ddf](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3bb9ddf1b61b0c5d0263022adc551b6e94edf607))

## [0.1.17](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.16...0.1.17) (2023-08-31)


### Build and continuous integration

* **deps:** update actions/checkout action to v3.6.0 ([b95db0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b95db0f3efd0f367139b9c2bba346c9b60e61352))
* **deps:** update danysk/action-checkout action to v0.2.11 ([95e3e9c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/95e3e9ca8c3a8210eaf69b46fcc5c5070dae8a56))


### Dependency updates

* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.44 ([a02f6da](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a02f6da0e39afbf2f2b3f66766cb33eab521f6b3))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.45 ([9882f44](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9882f44a72728a1acc6f75bee3ece8090803934e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.46 ([c4763b3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c4763b37dc31f1dcbb0de7557e6054c2ff49dd3d))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.47 ([f234854](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f2348541d38c2cbba5fb2d1322e53a3a35f53e7c))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.48 ([eb5fcbf](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/eb5fcbf24030c0fa902f478281188443f3954a17))
* **deps:** update plugin publishoncentral to v5.0.12 ([10c69a6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/10c69a6ca29fddf563f27f10bbc7d9ded7b35f91))


### Documentation

* **deps:** update plugin dokka to v1.9.0 ([553797c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/553797c022fe56dbfafc6fb23d70d5e390d33dda))

## [0.1.16](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.15...0.1.16) (2023-08-23)


### Build and continuous integration

* **deps:** update actions/setup-node action to v3.8.0 ([2c2647d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2c2647d876921d78d8267cdb9521a5ebada30a95))
* **deps:** update actions/setup-node action to v3.8.1 ([fccac80](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fccac800b88474a14a0aa8649387e8416ef269f2))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.7 ([1ca89d5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1ca89d545350ace32c48f663a243388fef3aff1c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.8 ([88f6639](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/88f6639b8f5b3f06b19063e38959269fec2b0b13))


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.10 ([dae9a37](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/dae9a37ad785f9e85e902fde4013d2ec9ab65aad))
* **deps:** update dependency gradle to v8.2.1 ([3239bc1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3239bc1b99c091b5b28fb195c88532dd37ba3e90))
* **deps:** update dependency gradle to v8.3 ([667d39e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/667d39e83626ec2f6a5f8801d345c163ec3d6d32))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.40 ([045496c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/045496c5e7ab745ab16063d8c3fb3ed103a94d88))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.41 ([fc653e8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fc653e8a6bd1d466454cccc77b9b1d11ad7fa6e6))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.42 ([f3e807a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f3e807a2cc630a365ef8792c86bd672352b977d6))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.43 ([e50ff2b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e50ff2b7abfb266f2a3db518f60b48511fcced5a))
* **deps:** update node.js to 18.17 ([e49ef24](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e49ef24a2ce062ff9ee07536ccb4665a3ab9e33c))
* **deps:** update plugin com.gradle.enterprise to v3.14 ([5f43fdd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5f43fddc3b22c707fdf13b47b70d0743d661a2cd))
* **deps:** update plugin com.gradle.enterprise to v3.14.1 ([c880f9b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c880f9b6e13ca3958bc605b54ad54c52e60d4129))
* **deps:** update plugin multijvmtesting to v0.5.4 ([1064c0b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1064c0bb12c11af24215dcf3753b88dc0a448dfb))
* **deps:** update plugin npm-publish to v3.4.0 ([618877d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/618877d94228d6e9aa6a91d64de5b72631a60679))
* **deps:** update plugin npm-publish to v3.4.1 ([6095c60](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6095c60e432f3e8c730e156d175320ee94d49f53))
* **deps:** update plugin org.gradle.toolchains.foojay-resolver-convention to v0.6.0 ([701d9a3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/701d9a3595561a0193442dd92f64af65cd327c69))
* **deps:** update plugin org.gradle.toolchains.foojay-resolver-convention to v0.7.0 ([45f6aaa](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/45f6aaac54105e4a893a94d182bcd9e44a92df12))
* **deps:** update plugin publishoncentral to v5.0.10 ([82b4051](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/82b40513fc5196d5df185d68edee50ecd57bd95c))
* **deps:** update plugin publishoncentral to v5.0.11 ([c135545](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c135545e8b707d59d2372176281c85a85189f6a9))

## [0.1.15](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.14...0.1.15) (2023-07-06)


### Build and continuous integration

* **deps:** update actions/checkout action to v3.5.3 ([13bb536](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/13bb536f8be32c72389c8f32d825d2f13ed72a26))
* **deps:** update actions/setup-node action to v3.7.0 ([2b34e79](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2b34e7916f6d7629880f795750ec25f151f02109))
* **deps:** update danysk/action-checkout action to v0.2.10 ([f2f3c79](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f2f3c79d4079e93bfa6d59d5b1bf85efbe6d6504))


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.9.0 ([34b2476](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/34b2476fc04efa069b448f4e08c76ba05759ccf3))
* **deps:** update dependency gradle to v8.2 ([c5678b2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c5678b250a88a4fec000ea23205c77b0ae2be240))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.32 ([e3cc7e5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3cc7e57cfa913010382616ea16d1c63e98b6449))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.33 ([ec9320f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ec9320f020a2d9761f8858d129eb755df8b8397a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.35 ([683a09b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/683a09b255e7b6ac66d65acfc2ff8a83f850cebe))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.36 ([0bb3014](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0bb30143c257575a366180608563d5da506b45ff))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.37 ([e77b113](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e77b1134a5beb8160a3a34de68a60e113ec72394))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.38 ([e16f733](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e16f733ec70ba09874e551b3953d99ea65eb4eaa))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.39 ([edd577d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/edd577d9015d117aebdf192b5ce269ed83d77a2a))
* **deps:** update plugin com.gradle.enterprise to v3.13.4 ([4f45889](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4f458898fdb3b2ad892542e9b5f3bd8baac4b384))
* **deps:** update plugin multijvmtesting to v0.5.3 ([d7a5920](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d7a59205fbd28d83079871883aa2f3bdc72787bb))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.9 ([1f08390](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1f08390365d5d016683dafa410de1e5db1fae170))
* **deps:** update plugin publishoncentral to v5.0.6 ([f3b2d56](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f3b2d5627ffe657d7922e272295161aad97219ec))
* **deps:** update plugin publishoncentral to v5.0.7 ([3fbd489](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3fbd48993891c06ab18306744cb344405794d5d2))
* **deps:** update plugin publishoncentral to v5.0.8 ([1a1bf3a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1a1bf3adec0a1a9ed96f0ec7d2a5da72ea97db7e))
* **deps:** update plugin publishoncentral to v5.0.9 ([4ea6fd0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4ea6fd0e926732b2db4025a8e4b427a62a788f16))

## [0.1.14](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.13...0.1.14) (2023-06-07)


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.8.22 ([e8e9abc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e8e9abc347a7141865f9cba6e398daf27574368d))
* **deps:** update plugin gitsemver to v1.1.10 ([55822c1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/55822c14d54942465d4d4ce156057a9fe2f0c5f8))
* **deps:** update plugin multijvmtesting to v0.5.2 ([6112058](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/61120582b5caf85e8e8367c7576eecb717bd3c37))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.8 ([92128a8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/92128a800e7996e008bdc50cafc333622bd3804e))

## [0.1.13](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.12...0.1.13) (2023-06-05)


### Build and continuous integration

* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.5 ([26a784e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/26a784e1ab16cf46db679a662512b5d5da88c5a3))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.6 ([5f85a37](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5f85a3742b41700f33db25974cf216698748c67a))


### Dependency updates

* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.26 ([b276341](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b27634196669b7467f9e4d66b6c25944cf47ef59))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.27 ([cf67724](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cf677245cfa3d2cf6c946fd1cc6deb51ab04aa19))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.28 ([b88273e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b88273e218f04a150f2a1cbb10395b13080c98ff))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.29 ([874118e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/874118e1007b15c5fef98fa11b00f527b1bcaf3a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.30 ([9c8b1ac](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9c8b1acb295f1c94fcab8f5022056a562231babf))
* **deps:** update kotest to v5.6.2 ([a59cffe](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a59cffe606e1a0d37e0a713d2a06cab86b421ff0))
* **deps:** update plugin com.gradle.enterprise to v3.13.1 ([a9d60e7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a9d60e7a8991c7e42f3218cb463306fd89e767e8))
* **deps:** update plugin com.gradle.enterprise to v3.13.2 ([eb9d0f2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/eb9d0f2a3930badefbf5d9f2b52b02ddef1d74f1))
* **deps:** update plugin com.gradle.enterprise to v3.13.3 ([7af65cb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7af65cbfdf5b1389435175c1d817c04d9e99c0bc))
* **deps:** update plugin multijvmtesting to v0.5.0 ([56bc94a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/56bc94a491ea440318e2954513d76165f4857230))
* **deps:** update plugin multijvmtesting to v0.5.1 ([d1a37ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d1a37ffd501640b45eae7bbebd9fd7f5a697b56b))
* **deps:** update plugin npm-publish to v3.3.0 ([c3867b8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c3867b861968848ba5485a7d1e7a578f27b538c3))
* **deps:** update plugin npm-publish to v3.3.1 ([12b642d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/12b642ddee269282e79f5a2d68464363b55889db))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.7 ([7ec84ed](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7ec84ed82f0cae614925740b61c44bdb3e261818))
* **deps:** update plugin publishoncentral to v5.0.5 ([b2281bc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b2281bcdbea1c8cc5526921776366c59ee2c23bd))


### Documentation

* **deps:** update plugin dokka to v1.8.20 ([df55ba1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/df55ba17de1a4a3188298293155324a02f7cee8a))

## [0.1.12](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.11...0.1.12) (2023-04-25)


### Build and continuous integration

* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.4 ([5f6eedc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5f6eedcdc45edcfac779f8887bd50e30340dbdcb))


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.8.21 ([373e9db](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/373e9db243bd90f07a5c31c278d1268d10163411))
* **deps:** update dependency gradle to v8.1.1 ([7172cde](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7172cded20341115a7b7bd6286ce956372145698))
* **deps:** update kotest to v5.6.1 ([cbda8a1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cbda8a1ba201ba7e3b45b2292319ca7681ff820a))
* **deps:** update plugin gitsemver to v1.1.8 ([363bd8a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/363bd8aa7bbd6df8c6233506be9ac2f600e1a89c))
* **deps:** update plugin gitsemver to v1.1.9 ([f029f86](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f029f86dd2687fcbde0cf63b60c93f613f49c2cb))
* **deps:** update plugin multijvmtesting to v0.4.21 ([acd68e5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/acd68e538b8e0a27a2a24999dee13b989cbc5ff7))
* **deps:** update plugin multijvmtesting to v0.4.22 ([30d2a9c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/30d2a9c1a1f514602650d8a566f08a0f0c0a07b1))
* **deps:** update plugin multijvmtesting to v0.4.23 ([135e283](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/135e283fcb4a52f13f5de9b6200b74ef745994ba))
* **deps:** update plugin org.gradle.toolchains.foojay-resolver-convention to v0.5.0 ([b9a2954](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b9a2954290e5be36f54ceee576f2054fb0182a64))
* **deps:** update plugin publishoncentral to v5.0.1 ([91d8a2f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/91d8a2f43191366ab1c81e3d9dd44fdb8c7c9c6a))
* **deps:** update plugin publishoncentral to v5.0.2 ([7e34da6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7e34da618d69cf111a46ab4cc5a3dcb945a27717))
* **deps:** update plugin publishoncentral to v5.0.3 ([432dde8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/432dde80992e284ee564db8a47ad0dd2b21a6aed))
* **deps:** update plugin publishoncentral to v5.0.4 ([c834ec2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c834ec27e6c0bb720e613977de3f976b48455c44))

## [0.1.11](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.10...0.1.11) (2023-04-18)


### Build and continuous integration

* **deps:** update actions/checkout action to v3.4.0 ([7208d19](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7208d196636d70e6d9c67f1eb33d68fff617e9ea))
* **deps:** update actions/checkout action to v3.5.0 ([35908c1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/35908c1824384fcdec441a07f7db90e315d709ce))
* **deps:** update actions/checkout action to v3.5.1 ([acbc70e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/acbc70e17ba2f8e8382a093240f74631d7aa2025))
* **deps:** update actions/checkout action to v3.5.2 ([a178ab0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a178ab069fa4105835cc9cf1c96d00ab9b837dbf))
* **deps:** update danysk/action-checkout action to v0.2.6 ([fb99e08](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fb99e081d366a1ab05aac9c0f82e7cbdf0b817f9))
* **deps:** update danysk/action-checkout action to v0.2.7 ([92c6540](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/92c6540f1ada0e47944cd5d4c4360bda638f2b34))
* **deps:** update danysk/action-checkout action to v0.2.8 ([504c2c4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/504c2c42ca3f29d8c2153f313f7b9aa9ad917341))
* **deps:** update danysk/action-checkout action to v0.2.9 ([e3db564](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3db564a65c9f5444f96e02e5759a50a40c7d88f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.1 ([db7b29a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/db7b29acc385403a889b09dceba61aac811a0b4a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.1 ([c63d5fc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c63d5fccfa7883b5c394ebe366fd34c3c0ec97ea))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.2 ([ccb5666](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ccb56663bbfac855029f30a1b034800277b0b20c))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.3 ([eb4e955](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/eb4e955bd38dd065ef74e84844a66c056b3ccbd8))
* fix the concurrency issues with the Central repo staging creation ([4229e1a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4229e1afc829cfbf70229e041a1033f13933d7bc))
* **mergify:** disable auto-rebasing due to Mergifyio/mergify[#5074](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/5074) ([49f38cc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/49f38cc2e275fdb50a9e2fa8b304f425ec0c5627))


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.8.20 ([607f695](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/607f6953a0b9901cc8e7fb92c02ed38c7d9dff5c))
* **deps:** update dependency gradle to v8.1 ([e3606a6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e3606a6ca786f264b0f02892022546ed6ad49407))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.17 ([f97951f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f97951fa43ac293b23991865f711e99476d29ef9))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.19 ([c201d4e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c201d4e94471e57bb2f2638956b7c3947b291e2b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.20 ([35db026](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/35db0261dc6756d97a1e9ae5c7303d99505fc78e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.21 ([8cb5d8d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8cb5d8d691a6b6e4aac23c0ef7c81f607e41d503))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.22 ([d145ef0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d145ef093ce8ef28f26e9beba45d866b6f172c79))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.23 ([bea8f30](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bea8f30a1a3bc84135548a483631b72ac8f4a83b))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.24 ([bc3638f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bc3638fd25a36844be0c4826e93b9e3b7a07b258))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.25 ([26fe037](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/26fe037d97cf3f371f828477547771e454bd278c))
* **deps:** update node.js to 18.16 ([1f69152](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1f691529e292063ad8779b6571ad81df4d8a5f7c))
* **deps:** update plugin com.gradle.enterprise to v3.12.5 ([ad8494c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ad8494ce37b3042e4b6560468f5adddaa768a078))
* **deps:** update plugin com.gradle.enterprise to v3.12.6 ([5f359e7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5f359e7a01c57a64860f9884711413bb546b31b3))
* **deps:** update plugin com.gradle.enterprise to v3.13 ([22bf0ac](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/22bf0ac2c3cf5ff6c0e78515180c5f835778808c))
* **deps:** update plugin gitsemver to v1.1.5 ([edaeba0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/edaeba0a8a0263796eae3ec57d717bde614dea25))
* **deps:** update plugin gitsemver to v1.1.6 ([197cd0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/197cd0f87a3d783052c753be28b0f898e652c9fb))
* **deps:** update plugin gitsemver to v1.1.7 ([30fd936](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/30fd93630b543a6779fa053f590d0214959edac7))
* **deps:** update plugin multijvmtesting to v0.4.20 ([8bb3365](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8bb3365c3be1888197772d1c464b2e6e257f3d7c))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.6 ([eba9609](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/eba9609787b14b389b3846f65d6bccb04cf12451))
* **deps:** update plugin publishoncentral to v4 ([4242351](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4242351cdade79772bbbd7dd91fd9dd1349c6eb7))
* **deps:** update plugin publishoncentral to v4.0.1 ([18bc4e8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/18bc4e8340a03c14d3d6bc0c5d006d84e16589ce))
* **deps:** update plugin publishoncentral to v4.1.1 ([d85494d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d85494d2aea974d8d4444d878135aa13545ff0dc))
* **deps:** update plugin publishoncentral to v5 ([9e86cde](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9e86cde75ab126505a6d81fa5c59b1d7a361a62d))

## [0.1.10](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.9...0.1.10) (2023-03-15)


### Bug Fixes

* **ci:** execute command line-by-line ([1e0e7a9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1e0e7a9e758eeeb2d11c5e6df4cb2320acc5fc3f))

## [0.1.9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.8...0.1.9) (2023-03-15)


### Bug Fixes

* **build:** disable correctly maven metadata generation for excluded target ([faf98d1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/faf98d121d86d9a1029d4e4da618f407fd019234))
* **ci:** add missing dependency between jobs ([e4416e1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e4416e187b88eab1b9b842160f64703dc8335b32))
* compile only host-specific platforms ([1af72a9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1af72a9a458d651c5eb6c7a18006c07c582ceb7a))


### Documentation

* **deps:** update plugin dokka to v1.8.10 ([281f5d0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/281f5d042c803600b8aa32b7e0fde7f6bdfada00))


### General maintenance

* delete old gradle property and suppress warning for ignore disable targets ([bbdb5bc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bbdb5bc8f4838601537aa1d7c5d487d7c6d5980f))
* **release:** 0.1.10 [skip ci] ([b551dd1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b551dd1f8feb3f0575d91dfb45d1f938b12dd845))
* **release:** 0.1.9 [skip ci] ([2754a91](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2754a913c4f40a6829ccc76e7c0cb396797392df)), closes [#152](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/152)


### Build and continuous integration

* apply `org.gradle.toolchains.foojay-resolver-convention` ([72fec67](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/72fec67ab8096747c65293ac80b77385f69b74a6))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.22 ([dc5cce4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/dc5cce4068ff8ed743c6ff77327545a368b0bf49))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.23 ([a8a2d63](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a8a2d63091e652f967824275c960f42a66b11ad1))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.24 ([b5b326f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b5b326f807e5540dd69a0c0bf8534e7eed1440bb))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.25 ([3dfe87c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3dfe87c2c4eeda38d95b3e430c965fa61ad20c06))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.26 ([044d478](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/044d4786ca2f3ab5d632ba8445b1e287aeb1f6fa))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.0 ([1a4e840](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1a4e84086fbe693f754e79a02901267c39274aef))
* **deps:** update nicolasfara/precompute-semantic-release-version-action action to v1.0.2 ([77a91b9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/77a91b9c736af141b6c8b5ed3346178438d60058))
* improve staging repo step ([65ecbf7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/65ecbf7f1674fc88b56487a34752cc38bd996e41))
* release job depends on staging-repo job ([728a1f0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/728a1f0e130b4d55fecf69c053d2662c14f349f0))
* use multi-stage CI for kt-MP projects ([#152](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/152)) ([7554099](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/75540998ad4785608a05599c780a0316fa6c79df))


### Dependency updates

* **deps:** update dependency gradle to v8 ([175a911](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/175a911d8e9064fa61cc8d69ed19e7ab21402b7d))
* **deps:** update dependency gradle to v8.0.2 ([337dfab](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/337dfab93a9df63aadd77d3fac5ddab05f9cb555))
* **deps:** update node.js to 18.14 ([109801d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/109801d1e8099de28ec734d176b50897a9d1b7ba))
* **deps:** update node.js to 18.15 ([fafd648](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fafd6481e4a1d2e6fc1a0a8f18f02579d20632ce))
* **deps:** update plugin com.gradle.enterprise to v3.12.3 ([033d511](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/033d5111845b9c97ed0bafc2158e5f97c194a838))
* **deps:** update plugin com.gradle.enterprise to v3.12.4 ([b774d64](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b774d64eef835974e5064d54645f5584114cab74))
* **deps:** update plugin gitsemver to v1.0.2 ([3b11723](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3b11723540775f00a4e868f021a8bed71310fc27))
* **deps:** update plugin gitsemver to v1.1.1 ([963db39](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/963db394a34bde13dc13e35a7ec4655029994eee))
* **deps:** update plugin gitsemver to v1.1.4 ([b8aecdd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b8aecdd34279892e13396e57074e079a6cf6e47b))
* **deps:** update plugin multijvmtesting to v0.4.16 ([d6a89ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d6a89ffbace23ac2d66816faf8e37af524b35910))
* **deps:** update plugin multijvmtesting to v0.4.17 ([7ee76a7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7ee76a7cbf1dd022b3643ebe49d13e849ff36d9e))
* **deps:** update plugin multijvmtesting to v0.4.19 ([7f169e3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7f169e3c7ed9ca01a2ec23f6207418f72caa5e9c))
* **deps:** update plugin npm-publish to v3.2.1 ([d9d123c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9d123cf5ff6eb4b88d70bf52b521cf6abe0006a))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.2 ([71765e2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/71765e2b5ce1392f6daacaf5732925b95c79e77c))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.3 ([7023cc5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7023cc5fa7b208426c55aabf48d673a97e6b5768))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.5 ([2661d7a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2661d7aef9efd8aad6451f733f22d2611e0a1c19))
* **deps:** update plugin publishoncentral to v2.0.13 ([3608c0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3608c0f3b743c4689b11cef240011f97bb990970))
* **deps:** update plugin publishoncentral to v3 ([80f854b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/80f854bdcbaa09609fc84f36b8a1e80bb56e2ffc))
* **deps:** update plugin publishoncentral to v3.3.0 ([b08e3f1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b08e3f15ac87bf182e080fda5f24a90459edf989))
* **deps:** update plugin publishoncentral to v3.3.1 ([bbaebbc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bbaebbc067de956c6228154c03e40d7dd5b4cb3f))
* **deps:** update plugin publishoncentral to v3.3.3 ([3173746](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/317374619ee4e75b22c7e3de9ccf506ceddc3376))
* **deps:** update plugin publishoncentral to v3.4.0 ([06d6894](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/06d689415223f389f9adf5b2f4ed8e85d28416a0))

## [0.1.10](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.9...0.1.10) (2023-03-06)


### Bug Fixes

* compile only host-specific platforms ([1af72a9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1af72a9a458d651c5eb6c7a18006c07c582ceb7a))


### General maintenance

* delete old gradle property and suppress warning for ignore disable targets ([bbdb5bc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bbdb5bc8f4838601537aa1d7c5d487d7c6d5980f))


### Build and continuous integration

* **deps:** update nicolasfara/precompute-semantic-release-version-action action to v1.0.2 ([77a91b9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/77a91b9c736af141b6c8b5ed3346178438d60058))
* improve staging repo step ([65ecbf7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/65ecbf7f1674fc88b56487a34752cc38bd996e41))

## [0.1.9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.8...0.1.9) (2023-03-04)


### Build and continuous integration

* apply `org.gradle.toolchains.foojay-resolver-convention` ([72fec67](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/72fec67ab8096747c65293ac80b77385f69b74a6))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.22 ([dc5cce4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/dc5cce4068ff8ed743c6ff77327545a368b0bf49))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.23 ([a8a2d63](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a8a2d63091e652f967824275c960f42a66b11ad1))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.24 ([b5b326f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b5b326f807e5540dd69a0c0bf8534e7eed1440bb))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.25 ([3dfe87c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3dfe87c2c4eeda38d95b3e430c965fa61ad20c06))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.26 ([044d478](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/044d4786ca2f3ab5d632ba8445b1e287aeb1f6fa))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.2.0 ([1a4e840](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1a4e84086fbe693f754e79a02901267c39274aef))
* use multi-stage CI for kt-MP projects ([#152](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/issues/152)) ([7554099](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/75540998ad4785608a05599c780a0316fa6c79df))


### Documentation

* **deps:** update plugin dokka to v1.8.10 ([281f5d0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/281f5d042c803600b8aa32b7e0fde7f6bdfada00))


### Dependency updates

* **deps:** update dependency gradle to v8 ([175a911](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/175a911d8e9064fa61cc8d69ed19e7ab21402b7d))
* **deps:** update dependency gradle to v8.0.2 ([337dfab](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/337dfab93a9df63aadd77d3fac5ddab05f9cb555))
* **deps:** update node.js to 18.14 ([109801d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/109801d1e8099de28ec734d176b50897a9d1b7ba))
* **deps:** update plugin com.gradle.enterprise to v3.12.3 ([033d511](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/033d5111845b9c97ed0bafc2158e5f97c194a838))
* **deps:** update plugin com.gradle.enterprise to v3.12.4 ([b774d64](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b774d64eef835974e5064d54645f5584114cab74))
* **deps:** update plugin gitsemver to v1.0.2 ([3b11723](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3b11723540775f00a4e868f021a8bed71310fc27))
* **deps:** update plugin gitsemver to v1.1.1 ([963db39](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/963db394a34bde13dc13e35a7ec4655029994eee))
* **deps:** update plugin gitsemver to v1.1.4 ([b8aecdd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b8aecdd34279892e13396e57074e079a6cf6e47b))
* **deps:** update plugin multijvmtesting to v0.4.16 ([d6a89ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d6a89ffbace23ac2d66816faf8e37af524b35910))
* **deps:** update plugin multijvmtesting to v0.4.17 ([7ee76a7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7ee76a7cbf1dd022b3643ebe49d13e849ff36d9e))
* **deps:** update plugin multijvmtesting to v0.4.19 ([7f169e3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7f169e3c7ed9ca01a2ec23f6207418f72caa5e9c))
* **deps:** update plugin npm-publish to v3.2.1 ([d9d123c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9d123cf5ff6eb4b88d70bf52b521cf6abe0006a))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.2 ([71765e2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/71765e2b5ce1392f6daacaf5732925b95c79e77c))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.3 ([7023cc5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7023cc5fa7b208426c55aabf48d673a97e6b5768))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.5 ([2661d7a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2661d7aef9efd8aad6451f733f22d2611e0a1c19))
* **deps:** update plugin publishoncentral to v2.0.13 ([3608c0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3608c0f3b743c4689b11cef240011f97bb990970))
* **deps:** update plugin publishoncentral to v3 ([80f854b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/80f854bdcbaa09609fc84f36b8a1e80bb56e2ffc))
* **deps:** update plugin publishoncentral to v3.3.0 ([b08e3f1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b08e3f15ac87bf182e080fda5f24a90459edf989))
* **deps:** update plugin publishoncentral to v3.3.1 ([bbaebbc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bbaebbc067de956c6228154c03e40d7dd5b4cb3f))
* **deps:** update plugin publishoncentral to v3.3.3 ([3173746](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/317374619ee4e75b22c7e3de9ccf506ceddc3376))

## [0.1.8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.7...0.1.8) (2023-02-05)


### Build and continuous integration

* **deps:** update danysk/action-checkout action to v0.2.5 ([53e150f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/53e150f57799969f9f83673ace24745f8a051654))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.21 ([d8021c2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d8021c2bdb0f4b37b339d95ebbff3067a3c7d60c))
* fix bad output export syntax ([f3cb4e1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f3cb4e148158d244efdbf217fd237f2f4ee9038c))
* read the version of npm from the package.json ([a5c7241](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a5c7241c46a0362649a84fb9b0258037392b5845))


### Dependency updates

* **core-deps:** update kotlin monorepo to v1.8.10 ([608bf9f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/608bf9f88508e3213fe3e65464bfb0791ac0da1c))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.16 ([77544fa](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/77544fa460e8f31602e20252687ff5622667d4f9))
* **deps:** update node.js to 18.13 ([ae0e43e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ae0e43e89ce6e422eabe724d33fdb5c1893919ba))

## [0.1.7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.6...0.1.7) (2023-01-05)


### Bug Fixes

* use lightweight tags ([ccb2fbf](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ccb2fbfaeffd35b9759adc0adb1aeac3a53cfd0c))
* use the correct git-version plugin ([287d3ad](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/287d3ad1a4fa856fc6fb3cdcf83461df4ee99eb4))


### Dependency updates

* **deps:** update plugin npm-publish to v3.2.0 ([0539eb2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0539eb2d6a8e76f7aa9dd266fdbaeafe832a166d))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.1.1 ([9d98473](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9d98473ca363f963530a2e42c0f1003b14ed6cfb))


### Build and continuous integration

* **deps:** update actions/checkout action to v3.3.0 ([667cdef](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/667cdeff039188b0bdbcc72ed45a75350b8da779))

## [0.1.6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.5...0.1.6) (2023-01-04)


### Build and continuous integration

* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.20 ([83cdf1b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/83cdf1b9579fc48eabb7350fd32e72a885c6e149))
* fix broken release (branches could interrupt master) ([cddb47d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cddb47d113f4f78a1ea0f76c705ebc8532111de6))


### Dependency updates

* **deps:** drops kotlin-stdlib-reflect ([0736e19](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0736e191a4433e3f131d85fc8cc990dc45267c21))
* **deps:** update plugin com.gradle.enterprise to v3.11.4 ([5494e01](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5494e0194ecc4b94e785aa5bb6f5205ac6609735))
* **deps:** update plugin com.gradle.enterprise to v3.12.1 ([a335284](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a335284d7010241d65c0f860436731f0b20d0534))
* **deps:** update plugin kotlin-qa to v0.25.1 ([3f4ef7d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3f4ef7d8312335714fbc550a45bef2ff447bafc6))
* **deps:** update plugin multijvmtesting to v0.4.15 ([8bcf559](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8bcf55962d4a8f28b892e0b89b463ad0bfeb7857))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.25 ([ba869eb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ba869eba1ba05910f90c9b2c8c0b97cc9a9915a2))
* **deps:** update plugin publishoncentral to v2.0.12 ([b5bb83a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b5bb83ad577e05114bb3d163ef962294bb8dc20b))
* **deps:** update plugin tasktree to v2.1.1 ([7b2a056](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7b2a0569cdf47265bab1af962d3a0b1d58fb9e26))


### Documentation

* **deps:** update plugin dokka to v1.7.20 ([fdcb4d4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fdcb4d4509e462a57f86960369c73371c1aa9b7e))

## [0.1.5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.4...0.1.5) (2023-01-02)


### Bug Fixes

* enable macos for cross-compilation ([3b382d7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3b382d7f4315362e72e0ea20d58cc36011cf2d80))


### Dependency updates

* **deps:** cleanup dependencies ([984d72c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/984d72c44d0bbd26a96ee3ae37992fdb1e7e2150))
* **deps:** update dependency gradle to v7.5.1 ([77b81ba](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/77b81babec431f3b2e35e4eff1d94f40dfb28cb0))
* **deps:** update dependency gradle to v7.6 ([cf53aa0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cf53aa0d3078af6c2ad723cb5602ca50ebfecf86))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.10 ([b0ce675](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b0ce675bae35b15a9f4eeff0f27afbea75972eff))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.11 ([cf28bf1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cf28bf10cb44ef58726feb50d307bdf5dcc9438e))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.12 ([d9277c5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d9277c519bf7a9caa377c104db1994a2fd0b9484))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.13 ([fd39e30](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fd39e3081f8b576aee8e244983f37ae02d9fa221))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.14 ([f366422](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f366422ccfd56ff84a2e3c8cb7c9f0ae2b827b8a))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.15 ([b4e148c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b4e148cb49dc2f9f34ab86d0b92a5ffda8b8b90a))
* **deps:** update kotest to v5.4.2 ([071c6a2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/071c6a289f7bd0ccb35db884c29e5104fac71e1d))
* **deps:** update kotest to v5.5.0 ([326313b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/326313bcd76de2e0160086104636e955e3bb4ec1))
* **deps:** update kotest to v5.5.1 ([ed7f18c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ed7f18c57d06f943f91a79dea4e0a1ae221f9d23))
* **deps:** update kotest to v5.5.2 ([8aa52d1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8aa52d1def3f2f08c287f485f034bf0a327205ec))
* **deps:** update kotest to v5.5.3 ([402bbfc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/402bbfc8a2df9407e30ed752550d630a9ad1ba2e))
* **deps:** update kotest to v5.5.4 ([421bff6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/421bff68e4d09e18991277773d7a2a6eba7a65eb))
* **deps:** update kotlin monorepo to v1.7.21 ([d78ac7b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d78ac7beca3ad2ff60635bb140537010e43f1a13))
* **deps:** update kotlin monorepo to v1.7.22 ([d6d3eeb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d6d3eeb546ea245627204694f527ec7bd1d3689a))
* **deps:** update kotlin monorepo to v1.8.0 ([7ec22b0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7ec22b07b162c80ed7d28370f83a3c3ba73819a7))
* **deps:** update kotlin to v1.7.20 ([3b3a063](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3b3a063cee3a6d2f92915e93a722f8bd31594e3e))
* **deps:** update node.js to 16.17 ([af5244b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/af5244b83afc847522c9d504ddc7eb095a55c0ec))
* **deps:** update node.js to 16.18 ([27a43a4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/27a43a4cc0cb5b7baa6d7c6cf7447e7b86c76d26))
* **deps:** update node.js to 18.12 ([10c5e19](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/10c5e199642362de21051ee678fbfaa83469d7c5))
* **deps:** update node.js to v18 ([c6ee33c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c6ee33cea4beb749d348d9f36ea1fc7ad53c583c))
* **deps:** update plugin com.gradle.enterprise to v3.11 ([1a2a533](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1a2a53376741b67fa180344ff1b2d62878962dbd))
* **deps:** update plugin com.gradle.enterprise to v3.11.1 ([f5c2c83](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f5c2c838305b9a0730f69d22dd453c43d8ac1c1a))
* **deps:** update plugin kotlin-qa to v0.22.2 ([55f1da1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/55f1da15d268acc24fe383a6dc5df2e139a861e0))
* **deps:** update plugin kotlin-qa to v0.23.0 ([288cd42](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/288cd42eb9ec555c78424c016d87a1ae5566c592))
* **deps:** update plugin kotlin-qa to v0.23.1 ([9f36dd8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9f36dd82f9b004e97e0c57dbadbf97f511f55ad0))
* **deps:** update plugin kotlin-qa to v0.23.2 ([3dc5c32](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3dc5c32c294eaf2f8cbca1968f855f33aeccbeff))
* **deps:** update plugin kotlin-qa to v0.24.0 ([a84d450](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a84d45096206b93721457c045b18b31b511e0c4b))
* **deps:** update plugin kotlin-qa to v0.25.0 ([c4d4f20](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c4d4f203f9651db710e46699a34569743fb7dec6))
* **deps:** update plugin npm-publish to v3.0.2 ([103f180](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/103f180a9135ad53c3c9847ac7c0a940c0970876))
* **deps:** update plugin npm-publish to v3.0.3 ([21239a9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/21239a916f7abe93b532619c2c36158908909b07))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.19 ([0160d63](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0160d63f8fe803f46fd36b8cfdb3099010431bac))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.20 ([0661ca3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0661ca3bb3de3d508e4f29ebd993bd7359b05981))
* **deps:** update plugin publishoncentral to v2.0.6 ([3d48014](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3d4801473d3798a25e08fa6bc59dc0832fb0807c))


### Build and continuous integration

* **deps:** update actions/checkout action to v3.1.0 ([31fe939](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/31fe9391c69ec4bf6c55d656148a11565e16453c))
* **deps:** update actions/checkout action to v3.2.0 ([f117a84](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f117a84a78e120ba652549491f911b1819d48245))
* **deps:** update danysk/action-checkout action to v0.2.2 ([8eac350](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/8eac350ee9d0cabeb25f60245c220eaee29bc705))
* **deps:** update danysk/action-checkout action to v0.2.3 ([39f3edd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/39f3eddde279d440b5b6446526ef8cf489745238))
* **deps:** update danysk/action-checkout action to v0.2.4 ([093c0ee](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/093c0ee99162bcfa6ee305b1b262cc3e956bc4cd))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.10 ([6855069](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6855069641bc60158be7379a63cec1849ae8a099))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.11 ([b277b2a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b277b2abe3ffb4fd439e6ecf7029b96cd24104b7))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.12 ([aa9ac31](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/aa9ac3101682d9ef70a1cdf876f61c45b5e8314a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.13 ([6778b0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6778b0f3e47555fe6a13e7af4fcfd75bd39a0656))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.14 ([f09f8ad](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f09f8ad2b31656a5f90e7b51b85c7ccea4dcae33))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.15 ([5c9bde5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5c9bde58cc04eb4aff056049e7f566ba1856093a))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.16 ([13a5ba7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/13a5ba766dd3a8eb8817dc35aaadff11458cab2f))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.17 ([d3d29b0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d3d29b079462aa17a7196b23b1fd4c1f0c845976))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.18 ([ef7db0f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ef7db0fcad7e0af34fd29155c9e04d6ae6e63250))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.19 ([6537cf7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6537cf719731136e9edcd093b36caadcf8cfdefa))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.3 ([c7888ac](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c7888ac35bea84503d6db93075574cf81c58f863))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.4 ([4196188](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4196188c674254260d6a041c111e865d0d802457))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.5 ([731480e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/731480ee3b73b974d426aa1e1d23f0d3c40a6655))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.6 ([7666500](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/76665002ffbde7fba454abf740db34011c378085))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.7 ([0f18030](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/0f18030019d2067b03d3e7f53e91dd44b6fb7ed8))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.8 ([1d94d8e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1d94d8eda9e384d3732b42706fd52b0cb56b88c9))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.9 ([49fab73](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/49fab73f2238cc774241d2c50a08e82d7b8157a8))
* set gradle property on release stage ([9538e74](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9538e74a2ffde7925d291e40be9a216736f44016))


### General maintenance

* **build:** disable watchos target platform ([af5b3c3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/af5b3c3bb91ecfd4ba6db1185e355cee4bba44b1))
* **build:** enable ARM and mingwx86 only when gradle property is set on release ([d6485ea](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d6485ea17a260d60b0be8728f654822ab11588bb))
* **build:** enable folder granularity ([1f2bbbd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1f2bbbd7f28e20a46576697e6920963ebc53b782))
* **build:** optimize build time enabling only the same target of the runner host ([c131109](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c131109160e66ef4ceb2895f317e1e6761f4bfcf))
* use extension method instead val and some refactor ([fb059ee](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/fb059eed31cfadf5466117e93eb629d19c1fc622))

## [0.1.4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.3...0.1.4) (2022-07-29)


### Bug Fixes

* **build:** make the project name lowercase, as npm does not suppor uppercase anymore ([ea051c8](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ea051c83beefc69f14b375040836b3d952409926))


### Dependency updates

* **deps:** update plugin multijvmtesting to v0.4.9 ([eff0432](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/eff0432c04562e64613b0d6db108cba8038fea09))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.18 ([5c8564c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5c8564ca1036d5f4ddb9e37b115c1916911aee59))


### Build and continuous integration

* configure mergify ([494a427](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/494a427c9204f37c0550b1c5ec5125e6fed31df2))
* do not run the pipeline on changes to .mergify.yml ([a9fbdb4](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a9fbdb425edbe268b1ef79417d18462b3c7aeffb))

## [0.1.3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.2...0.1.3) (2022-07-28)


### Bug Fixes

* **deps:** update kotest to v5.4.1 ([87b68ea](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/87b68ea3fca4f71f19b449d61b0acb1629dbe449))


### Build and continuous integration

* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.1 ([d7f0804](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d7f080458ca16786e2f4aecf5bf9a241410213fc))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.2 ([aab406d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/aab406d58aa311090fc72d95f4fbc80084be8a47))
* improve fork detection ([b24c813](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b24c8134928965bd8a8538a317f81588e1f5b62a))


### Dependency updates

* **deps:** update dependency gradle to v7.5 ([ca36e05](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/ca36e05a46090c8007a3a9d7290740c2576ec0fe))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.9 ([00db45a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/00db45a3ddf410946c5f8bbe4e22b577e9172934))
* **deps:** update kotest to v5.4.0 ([d593397](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d593397beb411ac5bee0eb2eb758b01d9d33894a))
* **deps:** update node.js to 16.16 ([7a486ff](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7a486ff953565188d4eb9ac036ec011459490920))
* **deps:** update plugin com.gradle.enterprise to v3.10.3 ([48f30b6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/48f30b6013e7e7402911f19e54b1a36eed07eb78))
* **deps:** update plugin dokka to v1.7.10 ([cc48863](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/cc48863001ab654f176400f6e1527a512f1d83e4))
* **deps:** update plugin kotlin-qa to v0.20.3 ([e5ce941](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e5ce941aa27164448b6210dadd303f4e9dfb59ba))
* **deps:** update plugin kotlin-qa to v0.20.4 ([b82b34d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b82b34da3ceb12d1e376e730d94185560549ebbb))
* **deps:** update plugin kotlin-qa to v0.21.0 ([8072171](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/807217107482db4d670bc75514338a701f3a1887))
* **deps:** update plugin kotlin-qa to v0.22.0 ([4509a0a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/4509a0a0d31bed795d300d2b0c41e8f999084be7))
* **deps:** update plugin kotlin-qa to v0.22.1 ([37080c5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/37080c5c634e65fcc6454e116fc104792a5a2aaf))
* **deps:** update plugin multijvmtesting to v0.4.6 ([406f8c3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/406f8c3fa58a8f3c038d99a4cd7aaa474c1fe94e))
* **deps:** update plugin multijvmtesting to v0.4.7 ([c02e1ab](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/c02e1ab8ebe0d14d4cccb2410e418df489e60748))
* **deps:** update plugin multijvmtesting to v0.4.8 ([85b6a76](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/85b6a76ebb3bb860866733289ce74b1a85d18601))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.14 ([531d91b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/531d91bb4a939eafa86d30fa7f52e4526b270014))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.15 ([9735bcd](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9735bcdc92e4203090e855bbec53209e123f90f9))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.16 ([6e445e6](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/6e445e619264f6ef2e51c8ccdb54b8a1dec9cdff))
* **deps:** update plugin org.danilopianini.gradle-pre-commit-git-hooks to v1.0.17 ([f92a9fc](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/f92a9fc09d8a05a909770d636f79aa62a3c2a81c))
* **deps:** update plugin publishoncentral to v2.0.3 ([9b9f04d](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9b9f04d840c37fa022f8c153d9068f3318fcee6f))
* **deps:** update plugin publishoncentral to v2.0.4 ([bb1cd05](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bb1cd055d589adfee86e5f099cff1bc68ebdcf61))
* **deps:** update plugin publishoncentral to v2.0.5 ([d180f80](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/d180f803ec28c91b074a92030e009fa27d841250))

## [0.1.2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.1...0.1.2) (2022-07-07)


### General maintenance

* remove unused import ([5542646](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/5542646c2038778e88e2acfa1b61eb6c405c39fa))


### Build and continuous integration

* create a dispatcher workflow triggering only one CI/CD workflow per update on non-default branches with open PRs ([32b5797](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/32b579733a26f86e54a12389f9ca058c46af7ed5))
* create a dispatcher workflow triggering only one CI/CD workflow per update on non-default branches with open PRs ([3f8610b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/3f8610b814ae4ffc15e221f9da54dce50d4b9c50))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.0.3 ([158aff0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/158aff0d38d9cb86dbcf1ad444c6216d54614e92))
* **deps:** update danysk/build-check-deploy-gradle-action action to v2.1.0 ([e722a6b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e722a6b97751ea8b06467f9b462ab0ea11390018))
* prepare the system for the to-be-released publish-on-central ([2fcb615](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2fcb6155eb64cda78e200026ba01b33c9cac224d))
* rename ci-guard.yml into dispatcher.yml ([a91e81b](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a91e81bfd8ebeba29e9250afa99b35eb84e92ff8))


### Dependency updates

* **core-deps:** update kotlin to v1.7.10 ([2ad36b7](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/2ad36b7f3216a8320bd0d56021381d0a654b4246))
* **deps:** update kotest to v5.3.2 ([a9b9839](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/a9b9839e502a620694e6a2af36a5562267adde92))
* **deps:** update plugin dokka to v1.7.0 ([7b43460](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7b43460037a3cd2515e1349469cf7ac93260704e))
* **deps:** update plugin multijvmtesting to v0.4.4 ([9f28f6f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9f28f6fac6fce6b64b2d59bbfa72b4b0cd89a865))
* **deps:** update plugin multijvmtesting to v0.4.5 ([19a9884](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/19a988474bdd60f9e0cbda64511a599c8301606e))
* **deps:** update plugin npm-publish to v3.0.1 ([1dde5f5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1dde5f59a3774481ced645e1d7c02df826d5a2d9))
* **deps:** update plugin publishoncentral to v1.0.2 ([21381f5](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/21381f57a503d5c998e763a58cedcee171ab564a))
* **deps:** update plugin publishoncentral to v2 ([9bcd14e](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9bcd14e3bd11e63513b71909c7dd8cb916cea86f))
* **deps:** update plugin publishoncentral to v2.0.2 ([1c23551](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/1c235519be076c4854eba4df3d34aed58792ee72))

## [0.1.1](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/compare/0.1.0...0.1.1) (2022-06-17)


### Bug Fixes

* **release:** fix publication on Central ([e11024c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/e11024c9ba3a48a37cc07124e36d953c4a0743e3))
* **release:** fix the broken name of the repo when deciding whether to run the release ([be8995f](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/be8995fcb6e405b12b77edf3e85d79858456d20d))


### General maintenance

* fix the project long name ([bfde25c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/bfde25c336b7b4069c73f6a0f76da095fc32a794))


### Dependency updates

* **core-deps:** update kotlin to v1.7.0 ([98d3be9](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/98d3be9d60b3d0c4e3b9e04828f27b5948202d72))
* **deps:** update kotest to v5.3.1 ([08fc96c](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/08fc96c901b60fa026566865df14aad5dc6a80b7))
* **deps:** update plugin kotlin-qa to v0.19.1 ([164a0a0](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/164a0a040523fac1c6fda255b0e2bf2d7674e199))
* **deps:** update plugin multijvmtesting to v0.4.3 ([397ca7a](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/397ca7ab4fccb303402b9e51cfd1703d8e08343e))
* **deps:** update plugin publishoncentral to v0.8.3 ([9bdd4bb](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9bdd4bbb3ebb2e52f17a9076fbc42a8827b84991))


### Build and continuous integration

* fix the release repo name ([7acfaf3](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/7acfaf336bfd855260b64bc1f68354f559e1e09d))
* ignore dependabot branch builds ([9a28476](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/9a28476454024475bb9c2e1d09a168c5b7c4b2ca))
* update the dry-deploy task ([b18f5e2](https://github.com/DanySK/Template-for-Kotlin-Multiplatform-Projects/commit/b18f5e2f76ea0de15ae2990ae33b3c32f042d8e6))

## [0.1.1](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/compare/0.1.0...0.1.1) (2022-05-30)


### Build and continuous integration

* '-Xopt-in' is deprecated and will be removed in a future release, use -opt-in instead ([8e338a4](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/8e338a4b8bb2cc9693a298aa4b7597e44773b464))
* **release:** add the configuration for semantic release ([35a19e3](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/35a19e3d4672a8514025615d8ffc04e2ff1ee67f))


### Dependency updates

* **core-deps:** update kotlin to v1.6.21 ([abbdbe5](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/abbdbe5ec0f474f46fb4e18864d1fbee13e90e5e))
* **deps:** update dependency gradle to v7.4.2 ([2b8ceda](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/2b8cedab9e0d4e528ac0b35fb82c88e765a2ae15))
* **deps:** update kotest to v4.6.4 ([079c1ab](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/079c1abfb8500309245bb630a411e086a3265e57))
* **deps:** update plugin com.gradle.enterprise to v3.10.1 ([c617f00](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/c617f004114e944bd37685beb2a792ce2626b9ca))
* **deps:** update plugin com.gradle.enterprise to v3.7.2 ([07bed1d](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/07bed1d24620ad45543daa17790baa060b5a36b0))
* **deps:** update plugin kotlin-qa to v0.2.2 ([9187421](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/91874217f1da7633cab0f274f61c72f2b142ddcc))
* **deps:** update plugin publishoncentral to v0.7.19 ([4e811b2](https://github.com/DanySK/Template-for-Kotlin-JVM-Projects/commit/4e811b2236e83710c056ce8cfe176f565f41853c))
