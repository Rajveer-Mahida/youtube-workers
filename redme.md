## Build your own Cloudflare Workers For Getting Youtube Live M3u8 Url.
<br>

Method to get YouTube channel live URL with **Workers Script.**

<br>

If you're new to **CF Workers**, visit and get started here: **[workers.cloudflare.com](https://workers.cloudflare.com/)**
<br>

## Build now
<br>

**Follow the steps:**

1. Your Cloudflare dashboard. `dash.cloudflare.com`

2. `Workers & Pages` > `Overview`.

3. `Create application`.

4. `Create Worker`.

5. Ignore the workers custom name, you can change it later.

6. Click on `Deploy`.

7. `Configure Worker` <> `Edit code` Choose one.

- If `Configure Worker`, continue to follow step number.
- If `Edit code`, skip step (8) and go to **Get Script Code**.

8. `Quick edit`.

<hr>
<br>

You can test the Workers script here **[Workers Playground](https://workers.cloudflare.com/playground)**

<br>

Don't forget to rename your **workers** > `yourCustomName.yourName.workers.dev`, it's up to you to make it an attractive _custom name_.

To rename your workers: 

Your workers > `Manage application` > `Rename service` > _Choose your new service name_ > `Continue`.

<br>

After deploying the new workers script, activate the workers by appending a **.m3u8** link to the end of the URL.

`/channel/`
```url
https://workers.name.workers.dev/channel/channel-id.m3u8
```

`/c/`
```url
https://workers.name.workers.dev/c/custom-name.m3u8
```

`/user/`
```url
https://workers.name.workers.dev/user/user-name.m3u8
```

`/live/`
```url
https://workers.name.workers.dev/live/video-id.m3u8
```

`/@`
```url
https://workers.name.workers.dev/@handle-name.m3u8
```

<br>
<br>

> [!IMPORTANT]  
> The **Link** only works if the **YT** channel is Live.

<br>
<br>

<details><summary><strong>YouTube Channel ID Finder</strong></summary>

<br>

- [seostudio.tools/youtube-channel-id](https://seostudio.tools/youtube-channel-id)

- [barrazacarlos.com/free-seo-tools/youtube-channel-id](https://barrazacarlos.com/free-seo-tools/youtube-channel-id)

- [web-seotools.com/youtube-channel-id](https://web-seotools.com/youtube-channel-id)

- [wholeseotools.com/youtube-channel-id](https://wholeseotools.com/youtube-channel-id)

- [sarojmeher.com/smartweb/youtube-channel-id](https://www.sarojmeher.com/smartweb/youtube-channel-id)

- [seotoolstamil.com/youtube-channel-id](https://seotoolstamil.com/youtube-channel-id)

- [webtoolsmate.com/youtube-channel-id](https://webtoolsmate.com/youtube-channel-id)

- [vionlinetools.com/youtube-channel-id](https://vionlinetools.com/youtube-channel-id)

- [onhelpinghand.org/youtube-channel-id](https://www.onhelpinghand.org/youtube-channel-id)

- [bonoseotools.com/youtube-channel-id](https://bonoseotools.com/youtube-channel-id)

- [zoneseotools.com/youtube-channel-id](https://zoneseotools.com/youtube-channel-id)

- [naijaseotools.com/youtube-channel-id](https://naijaseotools.com/youtube-channel-id)

- [seotool247.com/youtube-channel-id](https://seotool247.com/youtube-channel-id)

- [mrephrase.com/en/youtube-channel-id](https://mrephrase.com/en/youtube-channel-id)

- [oceanoftool.com/youtube-channel-id](https://oceanoftool.com/youtube-channel-id)

- [mintseotools.com/youtube-channel-id](https://mintseotools.com/youtube-channel-id)

- [toolsa2z.com/youtube-channel-id/](https://toolsa2z.com/youtube-channel-id/)

- [impif.com/youtube-channel-id](https://impif.com/youtube-channel-id)

- [ytbos.com/find-youtube-channel-id](https://ytbos.com/find-youtube-channel-id.php)

- [beehosting.pro/seotools/youtube-channel-id](https://beehosting.pro/seotools/youtube-channel-id)

- [seostudiotools.com/youtube-channel-id](https://seostudiotools.com/youtube-channel-id)

- [simplifiedwebtools.com/youtube-channel-id](https://simplifiedwebtools.com/youtube-channel-id)

- [codeofaninja.com/tools/find-youtube-channel-id](https://www.codeofaninja.com/tools/find-youtube-channel-id)

</details>

<hr>
<br>
<br>

> [!NOTE]
> **CF Workers:** Request limit is 100,000 per day. If the limit is exceeded, the request returns an error.

<br>
