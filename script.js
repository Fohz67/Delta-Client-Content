document.body.innerHTML += `
<div class="signIn" style="background: linear-gradient(45deg,#010004,#130535);position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999;display: flex;justify-content: center;align-items: center;flex-direction: column;">
    <h2 id="delta-text" style="position: absolute;top: 90px;font-size: 45px;background: linear-gradient(45deg, #5718c2, #8036ff, #aa78ff, #cbadff, #aa78ff, #8036ff, #5718c2);background-size: 200% auto;animation: slide 2s infinite;-webkit-background-clip: text;background-clip: text;color: transparent;">Delta important update</h2>
    <h4 id="delta-text" style="position: absolute;top: 180px;color: #b79cff;font-size: 25px;opacity: 0.8;text-align: center">You must install the new version to use Delta again.</h4>
    <a style="padding: 10px;font-size: 18px;text-align: center;width: 200px;background: #aa78ff;color: #130535;border-radius: 10px" href="https://deltavanis.eu/install/script.user.js">Install</a>
</div>
`;
