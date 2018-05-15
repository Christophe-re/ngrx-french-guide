import {Todo} from '../../models/todo';

export namespace TodoListModule {

    export enum ActionTypes {
        //  INIT_TODOS = '[todoList] Init Todos',
        LOAD_INIT_TODOS = '[todoList] Load Init Todos',
        SUCCESS_INIT_TODOS = '[todoList] Success Init Todos',
        ERROR_INIT_TODOS = '[todoList] Error Init Todos',
        CREATE_TODO = '[todoList] Create Todo',
        DELETE_TODO = '[todoList] Delete Todo',
        SELECT_TODO = '[todoList] Select Todo',
        UPDATE_TODO = '[todoList] Update Todo',
        LOAD_CREATE_TODO = '[todoList] Load Create Todo',
        SUCCESS_CREATE_TODO = '[todoList] Success Create Todo',
        ERROR_CREATE_TODO = '[todoList] Error Create Todo',
        LOAD_DELETE_TODO = '[todoList] Load Delete Todo',
        SUCCESS_DELETE_TODO = '[todoList] Success Delete Todo',
        ERROR_DELETE_TODO = '[todoList] Error Delete Todo'
    }

    // export class InitTodos {
    //     readonly type = ActionTypes.INIT_TODOS;
    //     constructor(public payload: Todo[]) {}
    // }
    export class CreateTodo {
        readonly type = ActionTypes.CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class LoadInitTodos {
        readonly type = ActionTypes.LOAD_INIT_TODOS;
    }

    export class SuccessInitTodos {
        readonly type = ActionTypes.SUCCESS_INIT_TODOS;
        constructor(public payload: Todo[]) {}
    }

    export class ErrorInitTodos {
        readonly type = ActionTypes.ERROR_INIT_TODOS;
    }
    export class LoadCreateTodo {
        readonly type = ActionTypes.LOAD_CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class SuccessCreateTodo {
        readonly type = ActionTypes.SUCCESS_CREATE_TODO;
        constructor(public payload: Todo) {}
    }

    export class ErrorCreateTodo {
        readonly type = ActionTypes.ERROR_CREATE_TODO;
    }

    export class LoadDeleteTodo {
        readonly type = ActionTypes.LOAD_DELETE_TODO;
        constructor(public payload: number) {}
    }

    export class SuccessDeleteTodo {
        readonly type = ActionTypes.SUCCESS_DELETE_TODO;
        constructor(public payload: number) {}
    }

    export class ErrorDeleteTodo {
        readonly type = ActionTypes.ERROR_DELETE_TODO;
    }
    export class SelectTodo {
        readonly type = ActionTypes.SELECT_TODO;
        constructor(public payload: Todo) {}
    }

    export class UpdateTodo {
        readonly type = ActionTypes.UPDATE_TODO;
        constructor(public payload: Todo) {}
    }

    export type Actions =
        SelectTodo
        | CreateTodo
        | UpdateTodo
        | LoadCreateTodo
        | ErrorCreateTodo
        | SuccessCreateTodo
        | LoadDeleteTodo
        | ErrorDeleteTodo
        | SuccessDeleteTodo
        | LoadInitTodos
        | SuccessInitTodos
        | ErrorInitTodos;
}
