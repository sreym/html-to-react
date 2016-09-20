'use strict';

function shouldProcessEveryNode(node) {
    return node.type !== 'text' || node.data.trim().length > 0;
}

module.exports = {
    shouldProcessEveryNode: shouldProcessEveryNode,
};
