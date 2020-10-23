export interface UseCase<Result = void, Parameters = void> {
  execute(parameters: Parameters): Promise<Result>;
}
