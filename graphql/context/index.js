const { User } = require('../../database/models');
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const verifyToken = async (token) => {
    try {
        let tokenExists = token.includes('Bearer ');
        if (!token) return null;
        if (!tokenExists) {
            return null;
        } else {
            token = token.replace(/^Bearer\s+/, '');
        }
        const { id } = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw new AuthenticationError(error.message);
    }
};

module.exports = async ({ req }) => {
    const token = (req.headers && req.headers.authorization) || '';
    const user = await verifyToken(token);
    return { user };
};
