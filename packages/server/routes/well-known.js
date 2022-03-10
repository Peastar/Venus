import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req);
    res.json({message: 'SSL'});
});

router.get('/', (req, res, next) => {
    console.log(req);
    console.log(next);
    res.json({message: 'Hello SSL'});
});

router.post('/Zc8RjnzI0El2x9l2ZtFwYdYWxMiQq5FJzbd5PYa_MbM', (req, res) => {
    res.send(
        'Zc8RjnzI0El2x9l2ZtFwYdYWxMiQq5FJzbd5PYa_MbM.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.get('/Zc8RjnzI0El2x9l2ZtFwYdYWxMiQq5FJzbd5PYa_MbM', (req, res) => {
    res.send(
        'Zc8RjnzI0El2x9l2ZtFwYdYWxMiQq5FJzbd5PYa_MbM.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.post('/6RTrlJfHbIXeFZkdxsDro1Hk-vkev_uLUaInafubBjg', (req, res) => {
    res.send(
        '6RTrlJfHbIXeFZkdxsDro1Hk-vkev_uLUaInafubBjg.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.get('/6RTrlJfHbIXeFZkdxsDro1Hk-vkev_uLUaInafubBjg', (req, res) => {
    res.send(
        '6RTrlJfHbIXeFZkdxsDro1Hk-vkev_uLUaInafubBjg.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.post('/WRZZ_sON3aJ47zHE1hgPkrSzQDAUNZz-wGNDiT7Y3DA', (req, res) => {
    res.send(
        'WRZZ_sON3aJ47zHE1hgPkrSzQDAUNZz-wGNDiT7Y3DA.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.get('/WRZZ_sON3aJ47zHE1hgPkrSzQDAUNZz-wGNDiT7Y3DA', (req, res) => {
    res.send(
        'WRZZ_sON3aJ47zHE1hgPkrSzQDAUNZz-wGNDiT7Y3DA.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.post('/xqPfHhRCJUv-jku9j8f9kSPis-79CrYEc0XoMfoo9WM', (req, res) => {
    res.send(
        'xqPfHhRCJUv-jku9j8f9kSPis-79CrYEc0XoMfoo9WM.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.get('/xqPfHhRCJUv-jku9j8f9kSPis-79CrYEc0XoMfoo9WM', (req, res) => {
    res.send(
        'xqPfHhRCJUv-jku9j8f9kSPis-79CrYEc0XoMfoo9WM.n9vhoVsr9f-p5AVhDGW_-NIPSlTUrf15Jo0eKIxokYI',
    );
});

router.post('/eAhSU1WCytGk_YiU25jvextL56HmRGxLDPsBwQe0CWI', (req, res) => {
    res.send(
        'eAhSU1WCytGk_YiU25jvextL56HmRGxLDPsBwQe0CWI._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.get('/eAhSU1WCytGk_YiU25jvextL56HmRGxLDPsBwQe0CWI', (req, res) => {
    res.send(
        'eAhSU1WCytGk_YiU25jvextL56HmRGxLDPsBwQe0CWI._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

module.exports = router;
