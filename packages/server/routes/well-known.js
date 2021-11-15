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

router.post('/QdvZkV4m_E1Fzs7_7O2AbDckIkZ3nZ3Ybls62xlpoTw', (req, res) => {
    res.send(
        'QdvZkV4m_E1Fzs7_7O2AbDckIkZ3nZ3Ybls62xlpoTw._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.get('/QdvZkV4m_E1Fzs7_7O2AbDckIkZ3nZ3Ybls62xlpoTw', (req, res) => {
    res.send(
        'QdvZkV4m_E1Fzs7_7O2AbDckIkZ3nZ3Ybls62xlpoTw._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.post('/1Tj_WGTRz_o3NNvkQKjye-0e6MrM8DfP_cBW2e9YflM', (req, res) => {
    res.send(
        '1Tj_WGTRz_o3NNvkQKjye-0e6MrM8DfP_cBW2e9YflM._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.get('/1Tj_WGTRz_o3NNvkQKjye-0e6MrM8DfP_cBW2e9YflM', (req, res) => {
    res.send(
        '1Tj_WGTRz_o3NNvkQKjye-0e6MrM8DfP_cBW2e9YflM._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.post('/EjnD-gegppPFYPYsqKijcZPCcAG06xEdI6j5r_C5HS0', (req, res) => {
    res.send(
        'EjnD-gegppPFYPYsqKijcZPCcAG06xEdI6j5r_C5HS0._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
    );
});

router.get('/EjnD-gegppPFYPYsqKijcZPCcAG06xEdI6j5r_C5HS0', (req, res) => {
    res.send(
        'EjnD-gegppPFYPYsqKijcZPCcAG06xEdI6j5r_C5HS0._rru0JgAEX1oWwR4SVw9QAtHkFZehQTvFNDzBKzvTbQ',
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
