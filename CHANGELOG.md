# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.1](https://github.com/nuxt/image/compare/v0.4.0...v0.4.1) (2021-02-16)


### Features

* allow sizes key to be screen width ([6624440](https://github.com/nuxt/image/commit/6624440ef84588c48f86c217157863b5ffd52706))


### Bug Fixes

* use Math.round for generated width ([8ee9a40](https://github.com/nuxt/image/commit/8ee9a406c993a08d1cdd6ec7d6acaa68dc215fe4))

## [0.4.0](https://github.com/nuxt/image/compare/v0.3.0...v0.4.0) (2021-02-15)


### ⚠ BREAKING CHANGES

* remove nuxt-picture wrapper
* screen based responsive (#182)

### Features

* remove nuxt-picture wrapper ([8d7d84b](https://github.com/nuxt/image/commit/8d7d84b0bf2b8bdf9be5c73d5b968b9a827545f3))
* screen based responsive ([#182](https://github.com/nuxt/image/issues/182)) ([51e2e0a](https://github.com/nuxt/image/commit/51e2e0aa34a46fe7713f6a96db8ba933182ded05))

## [0.3.0](https://github.com/nuxt/image/compare/v0.2.1...v0.3.0) (2021-02-03)


### ⚠ BREAKING CHANGES

* improved $img interface (#169)

### Features

* improved $img interface ([#169](https://github.com/nuxt/image/issues/169)) ([40ab562](https://github.com/nuxt/image/commit/40ab5624f733631298975d76e673923916dd46c6))
* use ipx@0.5.x ([fe92ecf](https://github.com/nuxt/image/commit/fe92ecf0e47d579478123bb777ba07785c184fd0))


### Bug Fixes

* **image:** use defu for options and fix default format ([#166](https://github.com/nuxt/image/issues/166)) ([cf2e9c1](https://github.com/nuxt/image/commit/cf2e9c13755f8eb440df1881b84145693e180f61))
* **plugin:** create static manifest for client hydration ([#162](https://github.com/nuxt/image/issues/162)) ([0b10c22](https://github.com/nuxt/image/commit/0b10c22f1661e6013b1f364365e0e4dd04dfc423))
* **provider:** use resolvePath to resolve aliases as well ([#161](https://github.com/nuxt/image/issues/161)) ([930e192](https://github.com/nuxt/image/commit/930e192f99a5bf2b00c7fb66316d67a062d81417))
* use correct width and handle x2 ([97e3889](https://github.com/nuxt/image/commit/97e3889dcf47aa89d4218c959bec2268ce79a029))
* use ratio in getSizes ([8e5b658](https://github.com/nuxt/image/commit/8e5b658fa51132ad405ea4e09bf2c8d476d9f002))

### [0.2.1](https://github.com/nuxt/image/compare/v0.2.0...v0.2.1) (2021-01-26)


### Bug Fixes

* **nuxt-img:** set key to allow making transitions ([20ed72b](https://github.com/nuxt/image/commit/20ed72b376b6845e6e5fd5fa14f698403c43ea34))

## [0.2.0](https://github.com/nuxt/image/compare/v0.0.4...v0.2.0) (2021-01-25)


### Features

* **nuxt-img:** responsive prop ([#155](https://github.com/nuxt/image/issues/155)) ([3dcee93](https://github.com/nuxt/image/commit/3dcee9322663a10e1e16a7de373c5a483ec2d7b1))
* $img.getSources and better srcset for `<nuxt-picture>` ([36e039b](https://github.com/nuxt/image/commit/36e039b5ada9d917cfb6eea225b188b56b00768f))
* add background prop ([ec8d1ce](https://github.com/nuxt/image/commit/ec8d1ce68bfde46e819311b5e62fe5fb9af097a1))
* allow overiding sharp options ([7df04ca](https://github.com/nuxt/image/commit/7df04ca11eca53ef60074a2fb4aa94ac84870d13))
* allow top level provider options ([7b47d6e](https://github.com/nuxt/image/commit/7b47d6e8ded1e3f78522b300b4543a44f98fbb87))
* allow/disallow remote urls ([0856343](https://github.com/nuxt/image/commit/08563435ab8606409d68c1e214442f201ee88cd8))
* fix full static support ([caaff86](https://github.com/nuxt/image/commit/caaff86daea8adc540524e2deed8cb832893cf6f))
* imagekit provider implementation and tests ([#109](https://github.com/nuxt/image/issues/109)) ([fa8be15](https://github.com/nuxt/image/commit/fa8be154f76194a38afa0ced75e529736a39b95b))
* support modifiers prop for components ([#154](https://github.com/nuxt/image/issues/154)) ([6fe9e8f](https://github.com/nuxt/image/commit/6fe9e8fa87a7f3b905b3bf3f7c20ebc36b027050))
* **nuxt-img:** handle loading=lazy with observer ([abb32a1](https://github.com/nuxt/image/commit/abb32a1e6e814daefe7fd7e7a145405f7687fd7b))
* support `NUXT_IMAGE_PROVIDER` environment variable ([1385eb8](https://github.com/nuxt/image/commit/1385eb8d3304c1c821bb4154519b7e253e177090))
* support assets using remote adapter ([acff75c](https://github.com/nuxt/image/commit/acff75ca54501aa74e12191538ab07bb75f65e7b))
* support providers and presets with props ([189cfb9](https://github.com/nuxt/image/commit/189cfb9d9496d52b184f314c2c10881108fe00aa))
* support types for config ([4d7bf06](https://github.com/nuxt/image/commit/4d7bf065cda9365c88e7485d8d6f5c7d9cac6793))


### Bug Fixes

* add types for pick utility and fix issues with imageOptions ([#156](https://github.com/nuxt/image/issues/156)) ([63aaa8a](https://github.com/nuxt/image/commit/63aaa8ae0c4b5bf0786f5a809f194a4d0eb91b02))
* **img:** handle ststic images in with prod server target ([95dd0c6](https://github.com/nuxt/image/commit/95dd0c6848e14c93e2a6e0d983548044c6d87067))
* clean up `undefined` values ([bf9e040](https://github.com/nuxt/image/commit/bf9e0408f4af2b291ed9c7254bf0c7f46f85f6d4))
* cleanup double slashes outside of provider runtime ([d71b03a](https://github.com/nuxt/image/commit/d71b03aa575264170c79548cd9b6d2b915b73565))
* disable blur filter on custom placeholder ([3f277a3](https://github.com/nuxt/image/commit/3f277a3ea20491dfe13a5e0a85039f95ec34e384))
* do not generate multiple sizes for SVG files ([7e385c3](https://github.com/nuxt/image/commit/7e385c3369ec3b3171f88c51be4437d0e1e75233))
* do not render image without src ([cbeada1](https://github.com/nuxt/image/commit/cbeada1d77244fc234b2a17e1fd2060c72ac3628))
* do not sent data urls to provider ([565445f](https://github.com/nuxt/image/commit/565445f27f03198fd876cdf7916cc0f81dbe02c8))
* improve error readability ([#79](https://github.com/nuxt/image/issues/79)) ([763f215](https://github.com/nuxt/image/commit/763f2152654986d8976f8cefe33364f591ada540))
* merge merge presets with inline modifiers ([164af06](https://github.com/nuxt/image/commit/164af0621556bd4fd106b230ed92c4de69199574))
* opacity ([1220c6a](https://github.com/nuxt/image/commit/1220c6a4f726797f036fc1a469f26480a401be0a))
* parse width and height modifiers ([dd2bf78](https://github.com/nuxt/image/commit/dd2bf786371272252a6edf518f38835be03d00d9))
* remove resolution server middleware ([fc34a73](https://github.com/nuxt/image/commit/fc34a73c71c77904133cb941425b05a790933c0b))
* set correct width and height for svg ([05e3bfe](https://github.com/nuxt/image/commit/05e3bfe87208132beaef3dabefde2f3ea0f273c3))
* sizes as array should overwrites defaults ([339b7dd](https://github.com/nuxt/image/commit/339b7dd9756a7870b28f5c84e53f079a3220621c))
* **cloudinary:** fit types, auto format & quality  ([#76](https://github.com/nuxt/image/issues/76)) ([74ef445](https://github.com/nuxt/image/commit/74ef445b5ffd740e28722fd68a45192234fc52cc))
* **module:** add package name to transpile list as well ([f97b34a](https://github.com/nuxt/image/commit/f97b34aaaaf8ed519d661c19c952e94e21e82d30))
* **picture:** call `getMeta` with current arguments ([d43daf2](https://github.com/nuxt/image/commit/d43daf2b00ebf3bf1402158126a243270fb5e45d))
* **twicpics:** fix minor issues and adds custom operations ([#132](https://github.com/nuxt/image/issues/132)) ([5a4e5d3](https://github.com/nuxt/image/commit/5a4e5d3fc90ac33f3c8262cdb9daa373f4187fc0))
* reduce placeholders quality ([b20a8f9](https://github.com/nuxt/image/commit/b20a8f98c91ebdcf0a0f1c66bcb21ee13fc79833))
* rename `nuxt-image` to `nuxt-img` ([df3b92c](https://github.com/nuxt/image/commit/df3b92c52adc5519911b1535a6c5fc64b1fae1c9))
* sanitize backgroun modifier ([c1f3fb4](https://github.com/nuxt/image/commit/c1f3fb4afb6cb7bd1108ac6a83dc969fb06bb4ae))
* **picture:** show image after load ([709d8e7](https://github.com/nuxt/image/commit/709d8e753410bb813886967e47de56ec295632d0))

### [0.0.4](https://github.com/nuxt/image/compare/v0.0.2...v0.0.4) (2020-11-10)


### Features

* a11y ([1732d62](https://github.com/nuxt/image/commit/1732d6228b10ecb3b7ca1939ec37f706739b2180))
* add `cacheDir` options ([449a005](https://github.com/nuxt/image/commit/449a00561080c6b654eccf07c7db43ef6c8a8e24))
* add click listener ([cbe2351](https://github.com/nuxt/image/commit/cbe2351b9da0ac5d021942455e99c7db474aacb6))
* add component aliases ([845579b](https://github.com/nuxt/image/commit/845579bf9d7b324712bf11f54d89a205853fd7a3))
* add fastly provider ([#15](https://github.com/nuxt/image/issues/15)) ([34ceb3c](https://github.com/nuxt/image/commit/34ceb3c4180b7765f87729ed5ae548ac4b3aa114))
* add module option to modify `IntersectionObserver` options ([#41](https://github.com/nuxt/image/issues/41)) ([9f9b920](https://github.com/nuxt/image/commit/9f9b920c18c76227d15981be5f465b46da8183d8))
* auto detect image ratio ([#37](https://github.com/nuxt/image/issues/37)) ([0f6e17e](https://github.com/nuxt/image/commit/0f6e17ea986925f7a5728a0e098c526bc9d7a137))
* inline styles ([#67](https://github.com/nuxt/image/issues/67)) ([6909267](https://github.com/nuxt/image/commit/690926736cd7cc7e7ffbe362bee5cbd25346f328))
* keep internal provider enable ([#60](https://github.com/nuxt/image/issues/60)) ([349b40a](https://github.com/nuxt/image/commit/349b40aea54d2d99274892bb0f261f34ee47a612))
* load all images on print ([#66](https://github.com/nuxt/image/issues/66)) ([2c034de](https://github.com/nuxt/image/commit/2c034de136780c82f1330205248f1ac95640b7f4))
* support responsive prop to generate sizes ([7e3f80b](https://github.com/nuxt/image/commit/7e3f80ba798eee2c267d77fb68b8b4cd16704866))
* universal meta resolving ([#55](https://github.com/nuxt/image/issues/55)) ([45bbbe9](https://github.com/nuxt/image/commit/45bbbe9858da7f16c6f95c499dcb144874505e97))
* **componets:** introduce `no-script` prop ([eb522b7](https://github.com/nuxt/image/commit/eb522b7e78ddd96ef6eea264cca665ead2ddfeec))
* **runtime:** add imgix provider ([#29](https://github.com/nuxt/image/issues/29)) ([3f4a6a5](https://github.com/nuxt/image/commit/3f4a6a5dd0bca5d16d7a69e66f20cd13c97291e7))
* **runtime:** catch image exceptions and prevent page crash ([#43](https://github.com/nuxt/image/issues/43)) ([e5190c1](https://github.com/nuxt/image/commit/e5190c18fea142db5e41176a669b00c358a740b8))


### Bug Fixes

* ensure component needs placeholder ([029f2cf](https://github.com/nuxt/image/commit/029f2cfaf40c654cd924324c19b473c1b5229fd7))
* image ratio calculation ([b88bb9c](https://github.com/nuxt/image/commit/b88bb9c8e29d8064420ac1277649a0a7e5f6661a))
* rename default provider's option ([c1509fb](https://github.com/nuxt/image/commit/c1509fb45674f7a02aef10de1dbfc0a8a89be886))
* resolve cache dir aliases ([5303699](https://github.com/nuxt/image/commit/5303699a0bd90df87796573aaac098d4cc1a169f))
* tests & typo ([6f06e65](https://github.com/nuxt/image/commit/6f06e657a60816b740ca004d79a15588f229710c))
* **local-provider:** resolve input dir alias ([0a612d5](https://github.com/nuxt/image/commit/0a612d5dd4f98c3e87625e964762c7a398a0fd62)), closes [#47](https://github.com/nuxt/image/issues/47)
* **runtime:** fix runtime behavior ([0ed7625](https://github.com/nuxt/image/commit/0ed76251335750fb679bc1e0877de55ef908f257))
* **runtime:** handle ssr false ([27c3445](https://github.com/nuxt/image/commit/27c3445fe39c14e7ed06873b88bfe625eaebb56d))
* **runtime:** rename `size` prop to `fit` ([6174417](https://github.com/nuxt/image/commit/6174417935f7a2cc05a67032fb7d03909a27325b)), closes [#16](https://github.com/nuxt/image/issues/16)
* **runtime:** use file name from `src` if `alt` prop is missing ([19e6157](https://github.com/nuxt/image/commit/19e615763163c5e6c56dca5e6591bdc5adad741b))

### [0.0.3](https://github.com/nuxt/image/compare/v0.0.2...v0.0.3) (2020-10-05)


### Features

* add fastly provider ([#15](https://github.com/nuxt/image/issues/15)) ([34ceb3c](https://github.com/nuxt/image/commit/34ceb3c4180b7765f87729ed5ae548ac4b3aa114))
* **componets:** introduce `no-script` prop ([eb522b7](https://github.com/nuxt/image/commit/eb522b7e78ddd96ef6eea264cca665ead2ddfeec))


### Bug Fixes

* **runtime:** fix runtime behavior ([0ed7625](https://github.com/nuxt/image/commit/0ed76251335750fb679bc1e0877de55ef908f257))
* **runtime:** rename `size` prop to `fit` ([6174417](https://github.com/nuxt/image/commit/6174417935f7a2cc05a67032fb7d03909a27325b)), closes [#16](https://github.com/nuxt/image/issues/16)
* **runtime:** use file name from `src` if `alt` prop is missing ([19e6157](https://github.com/nuxt/image/commit/19e615763163c5e6c56dca5e6591bdc5adad741b))

### [0.0.2](https://github.com/nuxt/image/compare/v0.0.1...v0.0.2) (2020-10-02)


### Bug Fixes

* improvements to make it work with Nuxt content ([46cc0e2](https://github.com/nuxt/image/commit/46cc0e21e853ad98db185da37375311963ec7716))

### 0.0.1 (2020-10-02)


### Features

* **img:** support `<img>` attributes ([9ed71da](https://github.com/nuxt/image/commit/9ed71dae8f61b5fcae3276329dbb17408ef37c60))
* preserve images name on generation ([3f789fc](https://github.com/nuxt/image/commit/3f789fc504fd88187424c6961bb384c4dbbdd9ec))
* support `clearCache` on local provider ([ba239a4](https://github.com/nuxt/image/commit/ba239a4eb8f3fdcfef0d11e1e7cdf89d5cf31465))
* support remote urls ([fd4184b](https://github.com/nuxt/image/commit/fd4184beefd71a926113917b6f370401db559cd8))
* **generate:** generate local file on static generation ([0f46395](https://github.com/nuxt/image/commit/0f463953a27514407060334cd8c60e3216892320))
* **picture:** init nuxt-picture ([bce1645](https://github.com/nuxt/image/commit/bce164532a555764947bac898839f0b2add42387))
* **srcset:** introduce `sets` props to create srcset ([e330900](https://github.com/nuxt/image/commit/e330900b002c02a5b2fde960a99e9366dc1cb67d))
* user-defined presets ([3e7b1cf](https://github.com/nuxt/image/commit/3e7b1cf3521c60fbe12c7a160c9c82cfd044b382))


### Bug Fixes

* **full-static:** find hashed images from page payload ([f7512c7](https://github.com/nuxt/image/commit/f7512c7e8c0c5c381d67e8288a57040182d1a827))
* **local:** remove baseUrl from provider options ([e0ec956](https://github.com/nuxt/image/commit/e0ec9561a360880e6c3cf1662998e4bf98a0570e))
* **provider:** normalize runtime paths to support windows ([df9470f](https://github.com/nuxt/image/commit/df9470f8cbaf738df428761ac473f0c6d791be5a))
* **runtime:** global nuxt variable to load page payload ([1869b0d](https://github.com/nuxt/image/commit/1869b0d68e49aeaf64b8998c0f6617b76c633568))
* use router base in generated images ([28ed0f2](https://github.com/nuxt/image/commit/28ed0f27c06fc7e10cf7e073d5eb2abd875a0c85))
* **sets-prop:** use width if breakpoint is missing ([d1f62df](https://github.com/nuxt/image/commit/d1f62df288cec4537b7d29a38f63f6d172bba2ab))
