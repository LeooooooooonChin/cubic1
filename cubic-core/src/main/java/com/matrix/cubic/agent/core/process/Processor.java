
package com.matrix.cubic.agent.core.process;


import io.netty.channel.ChannelHandlerContext;

import java.util.List;

public interface Processor<T> {

    List<Integer> types();

    void process(ChannelHandlerContext ctx, String id, T command) throws ClassNotFoundException;
}
