export const SOCKET_CONNECTION_REQUEST = Symbol("sockets/SOCKET_CONNECTION_REQUEST");
export const SOCKET_CONNECTION_SUCCESS = Symbol("sockets/SOCKET_CONNECTION_SUCCESS");
export const SOCKET_CONNECTION_FAILURE = Symbol("sockets/SOCKET_CONNECTION_FAILURE");
export const SOCKET_CONNECTION_MISSING = Symbol("sockets/SOCKET_CONNECTION_MISSING");

export const MOUNT_CHAT = Symbol("sockets/MOUNT_CHAT");
export const UNMOUNT_CHAT = Symbol("sockets/UNMOUNT_CHAT");

export const SEND_MESSAGE = Symbol("socket/SEND_MESSAGE");
export const RECEIVE_MESSAGE = Symbol("socket/RECEIVE_MESSAGE");
export const RECEIVE_NEW_CHAT = Symbol("socket/RECEIVE_NEW_CHAT");
export const RECEIVE_DELETED_CHAT = Symbol("socket/RECEIVE_DELETED_CHAT");
