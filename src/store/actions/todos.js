import {ADD_TODO, CHANGE_ALL, CHANGE_DONE, DEL_TODO,} from "../actionTypes/todos";

/**
 * 删除任务的action
 * @param {*} payload 删除的id
 */
export const delTodo = (payload) => ({
  type: DEL_TODO,
  payload,
});

/**
 * 修改状态
 * @param payload
 * @returns {{payload, type: string}}
 */
export const changeDone = (payload) => ({
  type: CHANGE_DONE,
  payload,
});

/**
 * 添加任务
 * @param payload
 * @returns {{payload, type: string}}
 */
export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const changeCheckAllAction = (payload) => ({
  type: CHANGE_ALL,
  payload,
});
