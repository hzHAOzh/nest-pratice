import { Module } from '@nestjs/common';
import { AIModelFactory } from './services/ai-model.factory';
import { SessionManager } from './services/session.manager';

/**
 * AI 模块
 *
 * 这个模块集中管理所有的 AI 相关服务。
 * 目前只有 AIModelFactory 服务。
 */
@Module({
  providers: [AIModelFactory, SessionManager],
  exports: [AIModelFactory, SessionManager], // 导出，这样其他模块可以使用
})
export class AIModule {}