import strings from '../config/app.config.js';
import Env from '../config/env.config.js';
import PaymentType from '../models/PaymentType.js';

export const init = async () => {
    try {
        const _init = async (paymentType) => {
            const pt = await PaymentType.findOne({ name: paymentType });

            if (!pt) {
                await new PaymentType({ name: paymentType, enabled: true }).save();
                console.log(`Payment Type ${paymentType} created and enabled.`)
            }
        };

        await _init(Env.PAYMENT_TYPE.CREDIT_CARD);
        await _init(Env.PAYMENT_TYPE.COD);
        await _init(Env.PAYMENT_TYPE.WIRE_TRANSFER);

        return true;
    } catch (err) {
        console.error(`[paymentType.init]  ${strings.DB_ERROR}`, err);
        return false;
    }
};

export const getPaymentTypes = async (req, res) => {
    try {
        const paymentTypes = await PaymentType.find().sort({ createdAt: 1 });

        return res.json(paymentTypes);
    } catch (err) {
        console.error(`[paymentType.getPaymentTypes]  ${strings.DB_ERROR}`, err);
        return res.status(400).send(strings.DB_ERROR + err);
    }
};

export const updatePaymentTypes = async (req, res) => {
    try {
        const paymentTypes = req.body;

        for (const paymentType of paymentTypes) {
            const pt = await PaymentType.findOne({ name: paymentType.name });
            pt.enabled = paymentType.enabled;
            await pt.save();
        }

        return res.sendStatus(200);
    } catch (err) {
        console.error(`[paymentType.updatePaymentTypes]  ${strings.DB_ERROR} ${req.body}`, err);
        return res.status(400).send(strings.DB_ERROR + err);
    }
};