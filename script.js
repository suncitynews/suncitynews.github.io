/* 随机生成的基础变量 */
:root {
    --primary-color: #0056BF;
    --bg-dark: #1a1a1a;
    --text-gray: #cccccc;
    --grid-color: rgba(255, 255, 255, 0.05);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
    min-height: 100vh;
    background-color: var(--bg-dark);
    color: var(--text-gray);
    font-family: 'Courier New', monospace;
}

.bgGrid {
    position: fixed;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background-image: linear-gradient(var(--grid-color) 1px, transparent 1px),
                      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
    transform: translate(0, 0);
    pointer-events: none;
    z-index: -1;
    opacity: 0.3;
    transition: transform 0.1s ease-out;
}

.contentWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 800px;
    background-color: rgba(30, 30, 30, 0.95);
    padding: 2rem;
    border: 1px solid var(--primary-color);
    box-shadow: 0 0 20px var(--primary-color);
    animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from {opacity: 0; transform: translate(-50%, -45%);}
    to {opacity: 1; transform: translate(-50%, -50%);}
}

.siteHeader {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.siteIcon {
    width: 40px;
    height: 40px;
    animation: spin 10s linear infinite;
}

@keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

.dateForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dateInput {
    padding: 0.5rem;
    background: #222;
    border: 1px solid var(--primary-color);
    color: var(--text-gray);
    font-size: 1.2rem;
    transition: border-color 0.3s ease;
}

.dateInput:focus {
    border-color: #00ffcc;
    outline: none;
}

.submitBtn {
    padding: 0.7rem;
    background: var(--primary-color);
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.submitBtn:hover {
    background: #00ffcc;
}
